import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import { map, switchMap, take, takeUntil } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { isNil as _isNil, uniq as _uniq, zip as _zip } from 'lodash-es';
import { AsyncSubject, from } from 'rxjs';

import { Gender, Patient } from 'app/model';
import { patientsActions } from 'app/store';
import { GenderSelectors } from 'app/store/gender-store';
import { RootState } from 'app/store/root.state';

interface HeaderCell {
    key: keyof Patient;
    typeMapper: (_: string) => unknown;
}

type PartialPatient = Omit<Patient, 'gender'> & { genderLabel: string };

@Component({
    selector: 'rt1-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent implements OnDestroy {
    private readonly unsubscribe$: AsyncSubject<void> = new AsyncSubject<void>();

    private readonly lowercaseToPatientField: Map<string, HeaderCell> = new Map([
        ['firstname', { key: 'firstName', typeMapper: (val: string) => val }],
        ['lastname', { key: 'lastName', typeMapper: (val: string) => val }],
        ['birthday', { key: 'birthday', typeMapper: Date }],
        ['gender', { key: 'gender', typeMapper: (val: string) => val }]
    ]);

    constructor(private readonly store$: Store<RootState>) {}

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public onUpload({ files: [file] }: { files: File[] }): void {
        from(file.text())
            .pipe(
                switchMap(text =>
                    this.store$.pipe(
                        select(GenderSelectors.selectAll),
                        map(genders => this.buildGenderLabelObjectMap(genders)),
                        map(gendersMap => ({ text, gendersMap }))
                    )
                ),
                take(1),
                takeUntil(this.unsubscribe$)
            )
            .subscribe(({ text, gendersMap }) => {
                const parse = text
                    .trim()
                    .match(/^.+$/gmu)
                    ?.map(line =>
                        line
                            .trim()
                            .split(',')
                            .map(el => el.trim())
                    );

                if (!_isNil(parse)) {
                    const [fields, ...entries] = parse;
                    const cells = this.getHeaderCellsIfValid(fields.map(field => field.replace(' ', '').toLowerCase()));
                    const patients = entries
                        .filter(entry => this.validData(cells, entry))
                        .map(entry => this.buildPartialPatient(cells, entry))
                        .map(partialPatient => ({
                            ...partialPatient,
                            gender: gendersMap.get(partialPatient.genderLabel.toLowerCase()) ?? Gender.nullObject
                        }))
                        .map(patient => new Patient(patient));

                    this.store$.dispatch(patientsActions.createBatchRequestAction({ patients }));
                }
            });
    }

    private buildGenderLabelObjectMap(genders: Gender[]): Map<string, Gender> {
        return new Map(genders.map(gender => [gender.label.toLowerCase(), new Gender(gender)]));
    }

    private getHeaderCellsIfValid(fields: string[]): HeaderCell[] {
        return this.validFields(fields)
            ? (fields.map(field => this.lowercaseToPatientField.get(field)) as HeaderCell[])
            : [];
    }

    private validFields(fields: string[]): boolean {
        const targetFieldCount = this.lowercaseToPatientField.size;
        return (
            (fields?.length ?? 0) === targetFieldCount &&
            _uniq(fields).length === targetFieldCount &&
            fields.every(key => this.lowercaseToPatientField.has(key))
        );
    }

    // TODO: implement this check later...
    private validData(_fields: HeaderCell[], _values: string[]): boolean {
        return true;
    }

    // assumes both fields and values are valid
    private buildPartialPatient(fields: HeaderCell[], values: string[]): PartialPatient {
        const zipped = _zip(fields, values);
        if (this.zipIsDefined(zipped)) {
            return zipped.reduce<PartialPatient>(
                (accum: PartialPatient, [field, value]): PartialPatient =>
                    (field.key === 'gender'
                        ? { ...accum, genderLabel: field.typeMapper(value) }
                        : { ...accum, [field.key]: field.typeMapper(value) }) as PartialPatient,
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                {} as PartialPatient
            );
            // eslint-disable-next-line no-else-return
        } else {
            throw new Error('fields and values were not the same length when passed to "buildPatient"');
        }
    }

    private zipIsDefined<T, U>(zipped: [T | undefined, U | undefined][]): zipped is [T, U][] {
        return zipped.every(([lhs, rhs]) => !_isNil(lhs) && !_isNil(rhs));
    }
}

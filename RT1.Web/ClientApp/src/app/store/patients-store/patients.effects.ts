import { Injectable } from '@angular/core';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { errorAction } from '../error-store/error.actions';
import { patientsActions, patientsActionText } from './patients.actions';
import { PatientsService } from './patients.service';

@Injectable()
export class PatientsEffects {
    public loadAllRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(patientsActions.loadAllRequestAction),
            concatMap(() =>
                this.patientsService.getAll().pipe(
                    map(patients => patientsActions.loadAllSuccessAction({ patients })),
                    catchError((error: unknown) => of(errorAction(patientsActionText)({ message: '', error })))
                )
            )
        )
    );

    //TODO: error messages later

    public loadOneRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(patientsActions.loadOneRequestAction),
            concatMap(({ id }) =>
                this.patientsService.get(id).pipe(
                    map(patient => patientsActions.loadOneSuccessAction({ patient })),
                    catchError((error: unknown) => of(errorAction(patientsActionText)({ message: '', error })))
                )
            )
        )
    );

    public updateBatchRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(patientsActions.updateBatchRequestAction),
            concatMap(({ patients }) =>
                this.patientsService.putBatch(patients).pipe(
                    map(patientUpdates => patientsActions.updateBatchSuccessAction({ patients: patientUpdates })),
                    catchError((error: unknown) => of(errorAction(patientsActionText)({ message: '', error })))
                )
            )
        )
    );

    public updateOneRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(patientsActions.updateOneRequestAction),
            concatMap(({ id, patient }) =>
                this.patientsService.put(id, patient).pipe(
                    map(patientUpdate => patientsActions.updateOneSuccessAction({ patient: patientUpdate })),
                    catchError((error: unknown) => of(errorAction(patientsActionText)({ message: '', error })))
                )
            )
        )
    );

    public createBatchRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(patientsActions.createBatchRequestAction),
            concatMap(({ patients }) =>
                this.patientsService.postBatch(patients).pipe(
                    map(newPatients => patientsActions.createBatchSuccessAction({ patients: newPatients })),
                    catchError((error: unknown) => of(errorAction(patientsActionText)({ message: '', error })))
                )
            )
        )
    );

    public deleteRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(patientsActions.deleteRequestAction),
            concatMap(({ id }) =>
                this.patientsService.delete(id).pipe(
                    map(deletedPatient => patientsActions.deleteSuccessAction({ deletedPatient })),
                    catchError((error: unknown) => of(errorAction(patientsActionText)({ message: '', error })))
                )
            )
        )
    );

    //TODO: also will want to handle success effects with a toast/etc

    constructor(private readonly patientsService: PatientsService, private readonly actions$: Actions) {}
}

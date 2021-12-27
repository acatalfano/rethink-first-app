import { Injectable } from '@angular/core';

import { catchError, concatMap, map } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { errorAction } from '../error-store/error.actions';

import { gendersActions, gendersActionText } from './genders.actions';
import { GendersService } from './genders.service';

@Injectable()
export class GendersEffects {
    public loadAllRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(gendersActions.loadAllRequestAction),
            concatMap(() =>
                this.gendersService.getAll().pipe(
                    map(genders => gendersActions.loadAllSuccessAction({ genders })),
                    catchError((error: unknown) => of(errorAction(gendersActionText)({ message: '', error })))
                )
            )
        )
    );

    constructor(private readonly gendersService: GendersService, private readonly actions$: Actions) {}
}

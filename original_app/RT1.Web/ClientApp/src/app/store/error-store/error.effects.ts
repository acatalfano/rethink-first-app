import { Injectable } from '@angular/core';

import { filter, map } from 'rxjs/operators';

import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class ErrorEffects {
    public error$ = createEffect(() =>
        this.actions$.pipe(
            filter(({ type }) => type.endsWith(' Error')),

            // TODO: currently no-op, but can be set-up later to handle errors with a toast message, etc.
            map(errorAction => errorAction)
        )
    );

    constructor(private readonly actions$: Actions) {}
}

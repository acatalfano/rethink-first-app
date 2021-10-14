import { createAction, props } from '@ngrx/store';
import type { TypedAction } from '@ngrx/store/src/models';

interface ErrorActionProps {
    message: string;
    error: unknown;
}
export type ErrorActionType = ErrorActionProps & TypedAction<string>;

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const errorAction = (actionText: string) => createAction(`${actionText} Error`, props<ErrorActionProps>());

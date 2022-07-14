import { createAction, props } from '@ngrx/store';

import { Gender } from 'model';

export const gendersActionText = '[GendersAction]';
export const gendersActions = {
    loadAllRequestAction: createAction(`${gendersActionText} Load All Request`),
    loadAllSuccessAction: createAction(`${gendersActionText} Load All Success`, props<{ genders: Gender[] }>())
};

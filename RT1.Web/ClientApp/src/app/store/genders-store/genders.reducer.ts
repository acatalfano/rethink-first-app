import { createReducer, on } from '@ngrx/store';

import { initLoad, endLoad } from '../store-utilities/common';

import { gendersActions } from './genders.actions';
import { initialState, gendersAdapter } from './genders.state';

export const reducer = createReducer(
    initialState,
    on(gendersActions.loadAllRequestAction, initLoad),
    on(gendersActions.loadAllSuccessAction, (state, { genders }) => gendersAdapter.setAll(genders, endLoad(state)))
);

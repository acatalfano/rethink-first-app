import { createReducer, on } from '@ngrx/store';
import { negate as _negate, isNil as _isNil, uniqBy as _uniqBy } from 'lodash-es';

import { isDefined } from 'app/utilities/assertions';

import { patientsActions } from '../patients-store';
import { initLoad, endLoad } from '../store-utilities/common';

import { initialState, gendersAdapter } from './gender.state';

import type { Gender, Patient } from 'app/model';

const extractGenderData = (patients: Patient[]): Gender[] =>
    _uniqBy(
        patients
            ?.filter(_negate(_isNil))
            ?.map(({ gender }) => gender)
            ?.filter(isDefined) ?? [],
        'id'
    );

export const reducer = createReducer(
    initialState,
    on(
        patientsActions.loadAllRequestAction,
        patientsActions.loadOneRequestAction,
        patientsActions.updateBatchRequestAction,
        patientsActions.updateOneRequestAction,
        patientsActions.createBatchRequestAction,
        patientsActions.deleteRequestAction,
        initLoad
    ),
    on(patientsActions.loadAllSuccessAction, (state, { patients }) =>
        gendersAdapter.setAll(extractGenderData(patients), endLoad(state))
    ),
    on(patientsActions.updateBatchSuccessAction, patientsActions.createBatchSuccessAction, (state, { patients }) =>
        gendersAdapter.upsertMany(extractGenderData(patients), endLoad(state))
    ),
    on(patientsActions.loadOneSuccessAction, patientsActions.updateOneSuccessAction, (state, { patient }) =>
        gendersAdapter.upsertMany(extractGenderData([patient]), endLoad(state))
    )
);

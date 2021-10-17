import { createReducer, on } from '@ngrx/store';

import { initLoad, endLoad } from '../store-utilities/common';

import { patientsActions } from './patients.actions';
import { initialState, patientsAdapter } from './patients.state';

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
    on(patientsActions.loadAllSuccessAction, (state, { patients }) => patientsAdapter.setAll(patients, endLoad(state))),
    on(patientsActions.updateBatchSuccessAction, patientsActions.createBatchSuccessAction, (state, { patients }) =>
        patientsAdapter.upsertMany(patients, endLoad(state))
    ),
    on(patientsActions.loadOneSuccessAction, patientsActions.updateOneSuccessAction, (state, { patient }) =>
        patientsAdapter.upsertOne(patient, endLoad(state))
    ),
    on(patientsActions.deleteSuccessAction, (state, { deletedPatient }) =>
        patientsAdapter.removeOne(deletedPatient.id, endLoad(state))
    )
);

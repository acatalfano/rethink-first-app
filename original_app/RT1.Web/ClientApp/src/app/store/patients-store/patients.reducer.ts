import { createReducer, on } from '@ngrx/store';

import { initLoad, endLoad } from '../store-utilities/common';

import { patientsActions as patientActions } from './patients.actions';
import { initialState, patientsAdapter } from './patients.state';

export const reducer = createReducer(
    initialState,
    on(
        patientActions.loadAllRequestAction,
        patientActions.loadOneRequestAction,
        patientActions.updateBatchRequestAction,
        patientActions.updateOneRequestAction,
        patientActions.createBatchRequestAction,
        patientActions.deleteRequestAction,
        initLoad
    ),
    on(patientActions.loadAllSuccessAction, (state, { patients }) => patientsAdapter.setAll(patients, endLoad(state))),
    on(patientActions.updateBatchSuccessAction, patientActions.createBatchSuccessAction, (state, { patients }) =>
        patientsAdapter.upsertMany(patients, endLoad(state))
    ),
    on(patientActions.loadOneSuccessAction, patientActions.updateOneSuccessAction, (state, { patient }) =>
        patientsAdapter.upsertOne(patient, endLoad(state))
    ),
    on(patientActions.deleteSuccessAction, (state, { deletedPatient }) =>
        patientsAdapter.removeOne(deletedPatient.id, endLoad(state))
    )
);

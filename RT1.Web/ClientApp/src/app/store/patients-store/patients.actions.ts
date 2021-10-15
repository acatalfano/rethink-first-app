import { createAction, props } from '@ngrx/store';
import type { Patient } from 'app/model';

export const patientsActionText = '[PatientsAction]';
export const patientsActions = {
    loadAllRequestAction: createAction(`${patientsActionText} Load All Request`),
    loadAllSuccessAction: createAction(`${patientsActionText} Load All Success`, props<{ patients: Patient[] }>()),

    loadOneRequestAction: createAction(`${patientsActionText} Load One Request`, props<{ id: number }>()),
    loadOneSuccessAction: createAction(`${patientsActionText} Load One Success`, props<{ patient: Patient }>()),

    updateBatchRequestAction: createAction(
        `${patientsActionText} Update Batch Request`,
        props<{ patients: Patient[] }>()
    ),
    updateBatchSuccessAction: createAction(
        `${patientsActionText} Update Batch Success`,
        props<{ patients: Patient[] }>()
    ),

    updateOneRequestAction: createAction(
        `${patientsActionText} Update One Request`,
        props<{ id: number; patient: Patient }>()
    ),
    updateOneSuccessAction: createAction(`${patientsActionText} Update One Success`, props<{ patient: Patient }>()),

    createBatchRequestAction: createAction(
        `${patientsActionText} Create Batch Request`,
        props<{ patients: Patient[] }>()
    ),
    createBatchSuccessAction: createAction(
        `${patientsActionText} Create Batch Success`,
        props<{ patients: Patient[] }>()
    ),

    createOneRequestAction: createAction(`${patientsActionText} Create One Request`, props<{ patient: Patient }>()),
    createOneSuccessAction: createAction(`${patientsActionText} Create One Success`, props<{ patient: Patient }>()),

    deleteRequestAction: createAction(`${patientsActionText} Delete Request`, props<{ id: number }>()),
    deleteSuccessAction: createAction(`${patientsActionText} Delete Success`, props<{ deletedPatient: Patient }>()),

    deleteManyRequestAction: createAction(`${patientsActionText} Delete Many Request`, props<{ ids: number[] }>()),
    deleteManySuccessAction: createAction(
        `${patientsActionText} Delete Many Success`,
        props<{ deletedPatients: Patient[] }>()
    )
};

//TODO: a couple more backend methods now (post-one, and delete-many)

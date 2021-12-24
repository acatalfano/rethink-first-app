import { createEntityAdapter } from '@ngrx/entity';

import type { BaseState } from '../store-utilities/base-state.interface';
import type { EntityAdapter } from '@ngrx/entity';
import type { Patient } from 'src/app/model';

export const patientsAdapter: EntityAdapter<Patient> = createEntityAdapter<Patient>({
    selectId: entity => entity.id
});

export const initialState: BaseState<Patient> = patientsAdapter.getInitialState({
    isLoading: false,
    error: null
});

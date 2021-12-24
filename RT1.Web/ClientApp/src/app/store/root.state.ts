import type { BaseState } from './store-utilities/base-state.interface';
import type { Gender, Patient } from 'src/app/model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface RootState {
    patient: BaseState<Patient>;
    gender: BaseState<Gender>;
}

//TODO: finish up with this to make "isLoading" resolve after an error occurs
// const rootAdapter: EntityAdapter<RootState> = createEntityAdapter<RootState>();
// const rootState: EntityState<RootState> = rootAdapter.getInitialState();

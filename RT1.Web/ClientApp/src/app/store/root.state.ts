import type { BaseState } from './store-utilities/base-state.interface';
import type { Gender, Patient } from 'app/model';

export interface RootState {
    patient: BaseState<Patient>;
    gender: BaseState<Gender>;
}

import { EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Patient } from 'app/model';
import { patientsAdapter } from './patients.state';

export const patientsState = createFeatureSelector<EntityState<Patient>>('patient');

export const { selectAll } = patientsAdapter.getSelectors(patientsState);

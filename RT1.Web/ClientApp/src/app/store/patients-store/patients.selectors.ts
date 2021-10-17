import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Patient } from 'app/model';

import { getLoadingState } from '../store-utilities/common';

import { patientsAdapter } from './patients.state';

import type { BaseState } from '../store-utilities/base-state.interface';

export const patientsState = createFeatureSelector<BaseState<Patient>>('patient');

export const { selectAll } = patientsAdapter.getSelectors(patientsState);

export const isLoading = createSelector(patientsState, getLoadingState);

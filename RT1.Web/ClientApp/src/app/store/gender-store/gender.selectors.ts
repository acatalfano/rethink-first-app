import { EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import { gendersAdapter } from './gender.state';

import type { Gender } from 'app/model';

export const gendersState = createFeatureSelector<EntityState<Gender>>('gender');

export const { selectAll } = gendersAdapter.getSelectors(gendersState);

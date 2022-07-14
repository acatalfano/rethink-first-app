import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { gendersAdapter } from './genders.state';

import type { RootState } from '../root.state';
import type { MemoizedSelector } from '@ngrx/store';
import type { Gender } from 'model';

export const gendersState = createFeatureSelector<EntityState<Gender>>('gender');

export const { selectAll } = gendersAdapter.getSelectors(gendersState);

export const selectIdByLabel = (targetLabel: string | undefined): MemoizedSelector<RootState, number | undefined> =>
    createSelector(selectAll, genders => genders.find(({ label }) => label === targetLabel)?.id);

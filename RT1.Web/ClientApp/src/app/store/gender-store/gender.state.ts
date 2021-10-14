import { createEntityAdapter } from '@ngrx/entity';

import type { BaseState } from '../store-utilities/base-state.interface';
import type { EntityAdapter } from '@ngrx/entity';
import type { Gender } from 'app/model';

export const gendersAdapter: EntityAdapter<Gender> = createEntityAdapter<Gender>({
    selectId: entity => entity.id
});

export const initialState: BaseState<Gender> = gendersAdapter.getInitialState({
    isLoading: false,
    error: null
});

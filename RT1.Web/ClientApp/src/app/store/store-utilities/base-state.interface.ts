import type { EntityState } from '@ngrx/entity';

export interface BaseState<T> extends EntityState<T> {
    isLoading: boolean;
    error: unknown;
}

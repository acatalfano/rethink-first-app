import type { BaseState } from './base-state.interface';

export const initLoad = <T>(state: BaseState<T>): BaseState<T> => ({ ...state, isLoading: true, error: null });

export const endLoad = <T>(state: BaseState<T>): BaseState<T> => ({ ...state, isLoading: false, error: null });

export const getError = <T>(state: BaseState<T>): unknown => state.error;

export const getLoadingState = <T, S extends BaseState<T>>(state: S): boolean => state.isLoading;

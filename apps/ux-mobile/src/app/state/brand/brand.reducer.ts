import { Action, createReducer, on } from '@ngrx/store';
import * as BrandActions from './brand.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { IBrand } from '@uxhm/api-interfaces';

export const brandFeatureKey = 'brand';

export interface State extends EntityState<IBrand> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface BrandPartialState {
  readonly [brandFeatureKey]: State;
}

export const brandAdapter: EntityAdapter<IBrand> = createEntityAdapter<IBrand>();

export const initialState: State = brandAdapter.getInitialState({
  loaded: false
});

const brandReducer = createReducer(
  initialState,

  on(BrandActions.loadBrands, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(BrandActions.loadBrandsSuccess, (state, { brands }) => 
    brandAdapter.addMany(brands, { ...state, loaded: true })),
  on(BrandActions.loadBrandsFailure, (state, { error }) => ({
    ...state,
    error
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return brandReducer(state, action);
}

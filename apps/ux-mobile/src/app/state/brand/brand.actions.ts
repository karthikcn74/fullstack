import { createAction, props } from '@ngrx/store';
import { IBrand } from '@uxhm/api-interfaces';

export const loadBrands = createAction(
  '[Brand] Load Brands'
);

export const loadBrandsSuccess = createAction(
  '[Brand] Load Brands Success',
  props<{ brands: IBrand[] }>()
);

export const loadBrandsFailure = createAction(
  '[Brand] Load Brands Failure',
  props<{ error: any }>()
);

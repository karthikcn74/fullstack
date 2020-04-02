import { createAction, props } from '@ngrx/store';
import { IProduct } from '@uxhm/api-interfaces';

export enum Actions {
  loadProducts= '[Products] Load Products',
  loadProductsSuccess = '[Products] Load Products Success',
  loadProductsFailure = '[Products] Load Products Failure',
  selectProduct = '[Products] Select Product'
}

export const loadProducts = createAction(Actions.loadProducts);

export const loadProductsSuccess = createAction(
  Actions.loadProductsSuccess,
  props<{ products: IProduct[] }>()
);

export const loadProductsFailure = createAction(
  Actions.loadProductsFailure,
  props<{ error: any }>()
);

export const selectProduct = createAction(
  Actions.selectProduct,
  props<{id: number}>()
);

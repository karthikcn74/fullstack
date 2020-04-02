import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';
import { IProduct } from '@uxhm/api-interfaces';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface State extends EntityState<IProduct> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last none error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: State;
}

export const productsAdapter: EntityAdapter<IProduct> = createEntityAdapter<
  IProduct
>();

export const initialState: State = productsAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    productsAdapter.addMany(products, { ...state, loaded: true })
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ProductsActions.selectProduct, (state, {id}) => { return {...state, selectedId: id}})
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}

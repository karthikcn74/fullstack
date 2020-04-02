// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as fromBrand from './brand.reducer';

// export const selectBrandState = createFeatureSelector<fromBrand.State>(
//   fromBrand.brandFeatureKey
// );

import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  brandFeatureKey,
  State,
  BrandPartialState,
  brandAdapter
} from './brand.reducer';

// Lookup the 'Products' feature state managed by NgRx
export const getBrandsState = createFeatureSelector<
BrandPartialState,
  State
>(brandFeatureKey);

const { selectAll, selectEntities } = brandAdapter.getSelectors();

export const getBrandsLoaded = createSelector(
  getBrandsState,
  (state: State) => state.loaded
);

export const getBrandsError = createSelector(
  getBrandsState,
  (state: State) => state.error
);

export const getAllBrands = createSelector(getBrandsState, (state: State) =>
  selectAll(state)
);

export const getBrandsEntities = createSelector(
  getBrandsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBrandsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBrandsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

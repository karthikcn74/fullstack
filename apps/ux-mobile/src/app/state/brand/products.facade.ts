import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromBrands from './brand.reducer';
import * as BrandsSelectors from './brand.selectors';

@Injectable()
export class BrandsFacade {
  loaded$ = this.store.pipe(select(BrandsSelectors.getBrandsLoaded));
  allBrands$ = this.store.pipe(select(BrandsSelectors.getAllBrands));
  selectedBrands$ = this.store.pipe(select(BrandsSelectors.getSelected));

  constructor(private store: Store<fromBrands.BrandPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

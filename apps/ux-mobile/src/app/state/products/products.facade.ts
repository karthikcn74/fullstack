import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromProducts from './products.reducer';
import * as ProductsSelectors from './products.selectors';
import { ProductsService } from '../../services/products.service';
import { IBrand, IProduct } from '@uxhm/api-interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsFacade {
  loaded$ = this.store.pipe(select(ProductsSelectors.getProductsLoaded));
  allProducts$ = this.store.pipe(select(ProductsSelectors.getAllProducts));
  selectedProducts$ = this.store.pipe(select(ProductsSelectors.getSelected));
  productsByBrand$: Observable<IProduct[]>;
  constructor(private store: Store<fromProducts.ProductsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  getProductsByBrand(brand: IBrand) {
    this.productsByBrand$ = this.store.pipe(select(ProductsSelectors.getProductsByBrand, brand));
  }
}

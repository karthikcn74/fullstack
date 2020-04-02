import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import * as fromProducts from './products.reducer';
import * as Products from './products.actions';
import { ProductsService } from '../../services/products.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Products.Actions.loadProducts),
      mergeMap(() => this.productsService.getProducts()
        .pipe(
          map(product => ({type: Products.Actions.loadProductsSuccess, products: product}))
          , catchError(() => EMPTY)
        )
      )
    )
  );


  constructor(private actions$: Actions, private productsService: ProductsService) {}
}

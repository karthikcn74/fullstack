import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BrandActions from './brand.actions';
import { ProductsService } from '../../services/products.service';



@Injectable()
export class BrandEffects {

  loadBrands$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(BrandActions.loadBrands),
      mergeMap(() => this.productsService.getBrands()
        .pipe(
          map(brands => ({type: '[Brand] Load Brands Success', brands: brands}))
          , catchError(() => EMPTY)
        )
      )
    );
  });



  constructor(private actions$: Actions, private productsService: ProductsService) {}

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import * as fromProducts from './state/products/products.reducer';
import { ProductsEffects } from './state/products/products.effects';
import { ProductsFacade } from './state/products/products.facade';
import * as fromUsers from './state/users/users.reducer';
import { UsersEffects } from './state/users/users.effects';
import { UsersFacade } from './state/users/users.facade';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from '@uxhm/core';
import * as fromStartup from './state/startup/startup.reducer';
import { StartupEffects } from './state/startup/startup.effects';
import { appInit } from './state/app-initializer';
import { StartupFacade } from './state/startup/startup.facade';
import { reducers, metaReducers } from './state/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromBrand from './state/brand/brand.reducer';
import { BrandEffects } from './state/brand/brand.effects';
import { BrandsFacade } from './state/brand/products.facade';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer
    ),
    EffectsModule.forFeature([ProductsEffects, BrandEffects]),
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    StoreModule.forFeature(
      fromStartup.STARTUP_FEATURE_KEY,
      fromStartup.reducer
    ),
    EffectsModule.forFeature([StartupEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromBrand.brandFeatureKey, fromBrand.reducer)
  ],
  providers: [ProductsFacade, UsersFacade, StartupFacade, BrandsFacade,   {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [StartupFacade, ProductsFacade, BrandsFacade],
    multi: true
  }],
  // exports: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

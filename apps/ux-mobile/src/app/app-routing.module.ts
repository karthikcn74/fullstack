import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './components/home/home.page';
import { HomePageModule } from './components/home/home.module';
import { ProductListingPage } from './components/product-listing/product-listing.page';
import { ProductListingPageModule } from './components/product-listing/product-listing.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'product-listing',
    loadChildren: () => import('./components/product-listing/product-listing.module').then( m => m.ProductListingPageModule)
  },
  {
    path: 'product-info',
    loadChildren: () => import('./components/product-info/product-info.module').then( m => m.ProductInfoPageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    HomePageModule,
    ProductListingPageModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListingPageRoutingModule } from './product-listing-routing.module';

import { ProductListingPage } from './product-listing.page';
import { CoreModule } from '@uxhm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    ProductListingPageRoutingModule
  ],
  declarations: [ProductListingPage]
})
export class ProductListingPageModule {}

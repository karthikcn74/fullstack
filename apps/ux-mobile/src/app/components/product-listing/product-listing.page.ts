import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from '../../state/products/products.facade';
import { Observable } from 'rxjs';
import { IProduct } from '@uxhm/api-interfaces';
import { NavigationService } from '@uxhm/core';
import * as ProductAction from '../../state/products/products.actions';

@Component({
  selector: 'ux-hm-product-listing',
  templateUrl: './product-listing.page.html',
  styleUrls: ['./product-listing.page.scss'],
})
export class ProductListingPage implements OnInit {
  header;
  
  constructor(public productsFacade: ProductsFacade, private navigationService: NavigationService) { 
    this.header = {
      pageTitle: 'Auto Vision',
      menus: ['arrow-back']
    }

    this.productsFacade.productsByBrand$.subscribe((prod) => console.log(prod));
  }

  ngOnInit() {

  }

  onHeaderEvents(event) {
    this.navigationService.back();
  }

  getCarDetails(product) {
    this.productsFacade.dispatch(ProductAction.selectProduct({id: product.id}));
    this.navigationService.openPage('product-info');
  }
}

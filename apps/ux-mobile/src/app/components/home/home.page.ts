import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsFacade } from '../../state/products/products.facade';
import { StartupFacade } from '../../state/startup/startup.facade';
import { BrandsFacade } from '../../state/brand/products.facade';
import { NavigationService } from '@uxhm/core';

@Component({
  selector: 'ux-hm-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // headerMenu: Array<string> = ['search', 'notifications'];
  model
  rowcol: number[];
  params: Params;

  constructor(
    private route: ActivatedRoute, 
    public productsFacade: ProductsFacade, 
    public startupFacade: StartupFacade,
    public brandsFacade: BrandsFacade,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.model = {
      pageTitle: 'Auto Vision',
      menus: ['search', 'notifications']
    }
    this.rowcol = [2, 4];
  }

  getCarDetails(event) {
    console.log(event);
  }

  getBrand(event) {
    console.log(event);
    this.productsFacade.getProductsByBrand(event);
    this.navigationService.openPage('product-listing');
  }
}

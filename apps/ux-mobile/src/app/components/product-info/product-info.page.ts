import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@uxhm/core';

@Component({
  selector: 'ux-hm-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {
  header
  constructor(private navigationService: NavigationService) {
    this.header = {
      pageTitle: 'Auto Vision',
      menus: ['arrow-back']
    }
   }

  ngOnInit() {
  }

  onHeaderEvents(event) {
    this.navigationService.back();
  }
}

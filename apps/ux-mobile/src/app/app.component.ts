import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { NavigationService } from '@mono-repo/services';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationService } from '@uxhm/core'
import { StartupFacade } from './state/startup/startup.facade';
import { ProductsFacade } from './state/products/products.facade';
import * as startupAction from './state/startup/startup.actions';
import * as productAction from './state/products/products.actions';

@Component({
  selector: 'mono-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private http: HttpClient, 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navigationService: NavigationService,
    private startupFacade: StartupFacade,
    private productsFacade: ProductsFacade
  ) {}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.startupFacade.dispatch(startupAction.loadStartup());
      // this.productsFacade.dispatch(productAction.loadProducts());
    });
  }

  OnFooterActions(event) {
    this.navigationService.openPage('/' + event.action);
  }
}

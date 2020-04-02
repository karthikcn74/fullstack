import { Injectable } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  options: NativeTransitionOptions = {
    direction: 'top',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
   }

  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) { }

  openPage(page: any) {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward(page);
  }

  back() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.back();
  }
}

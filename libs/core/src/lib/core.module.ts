import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './components/accordion/accordion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideComponent } from './components/slide/slide.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './components/list/list.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { RouteReuseStrategy } from '@angular/router';


@NgModule({
  imports: [CommonModule, IonicModule.forRoot()],
  declarations: [AccordionComponent, FooterComponent, HeaderComponent, SlideComponent, GridComponent, ListComponent, ThumbnailComponent],
  exports: [
    AccordionComponent, 
    FooterComponent, 
    HeaderComponent, 
    SlideComponent, 
    GridComponent, 
    ListComponent,
    ThumbnailComponent,
    IonicModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ]
})
export class CoreModule {}

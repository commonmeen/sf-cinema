import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ShowingPage } from '../pages/showing/showing';
import { TheaterPage } from '../pages/theater/theater';
import { ComingPage } from '../pages/coming/coming';
import { PromotionPage } from '../pages/promotion/promotion';
import { PromotionDetailPage } from '../pages/promotion-detail/promotion-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail' ;


@NgModule({
  declarations: [
    MyApp,
    ShowingPage,
    TheaterPage,
    ComingPage,
    PromotionPage,
    PromotionDetailPage,
    TabsPage,
    MovieDetailPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShowingPage,
    TheaterPage,
    ComingPage,
    PromotionPage,
    PromotionDetailPage,
    TabsPage,
    TabsPage,
    MovieDetailPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
 
  ]
})
export class AppModule {}

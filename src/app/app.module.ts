import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ShowingPage } from '../pages/showing/showing';
import { TheaterPage } from '../pages/theater/theater';
import { ComingPage } from '../pages/coming/coming';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TheaterDataProvider } from '../providers/theater-data/theater-data';

@NgModule({
  declarations: [
    MyApp,
    ShowingPage,
    TheaterPage,
    ComingPage,
    MorePage,
    TabsPage
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
    MorePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TheaterDataProvider
  ]
})
export class AppModule {}

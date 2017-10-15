import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheaterPage } from './theater';

@NgModule({
  declarations: [
    TheaterPage,
  ],
  imports: [
    IonicPageModule.forChild(TheaterPage),
  ],
})
export class TheaterPageModule {}

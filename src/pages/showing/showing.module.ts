import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowingPage } from './showing';

@NgModule({
  declarations: [
    ShowingPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowingPage),
  ],
})
export class ShowingPageModule {}

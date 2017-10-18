import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowTimePage } from './show-time';

@NgModule({
  declarations: [
    ShowTimePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowTimePage),
  ],
})
export class ShowTimePageModule {}

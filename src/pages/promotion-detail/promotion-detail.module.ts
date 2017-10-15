import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionDetailPage } from './promotion-detail';

@NgModule({
  declarations: [
    PromotionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotionDetailPage),
  ],
})
export class PromotionDetailPageModule {}

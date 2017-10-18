import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { PromotionDetailPage } from '../promotion-detail/promotion-detail';
/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-promotion',
	templateUrl: 'promotion.html',
})
export class PromotionPage {

	promotions: Array<any> = [];
	constructor(public data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
		this.promotions = data.getPromotion();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PromotionPage');
	}
	showTheaterDetail(promotion: Array<any>) {
		this.navCtrl.push(PromotionDetailPage, { 'promotionDetail': promotion });
	}

}

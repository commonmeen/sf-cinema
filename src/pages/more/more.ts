import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

	promotions : Array<any> = [] ;
  	constructor(private data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  		this.promotions = data.getPromotion() ;
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad MorePage');
  	}

}

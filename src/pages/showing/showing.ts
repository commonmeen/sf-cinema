import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { MovieDetailPage } from '../movie-detail/movie-detail' ; 
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PromotionDetailPage } from '../promotion-detail/promotion-detail';
/**
 * Generated class for the ShowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showing',
  templateUrl: 'showing.html',
})
export class ShowingPage {
  @ViewChild(Slides) slides: Slides;
  movies: Array<any> = [];
  promotions : Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private data:DataProvider) {
    this.movies = data.getMovie() ;
    this.promotions = data.getPromotion() ;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowingPage');
  }

  movieTapped(event,movie) {
    this.navCtrl.push(MovieDetailPage,movie) ;
  }

  promoTapped(event,promo) {
    this.navCtrl.push(PromotionDetailPage,{ 'promotionDetail': promo }) ;
  }

  slideChanged() {

  }
  
}

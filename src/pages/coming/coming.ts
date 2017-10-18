import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { MovieDetailPage } from '../movie-detail/movie-detail' ; 

/**
 * Generated class for the ComingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coming',
  templateUrl: 'coming.html',
})
export class ComingPage {
  movieComingOctober:Array<any>=[];
  movieComingNovember:Array<any>=[];
  movieComingDecember:Array<any>=[];


  constructor(public data:DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.movieComingOctober = data.getMovieComingOctober();
    this.movieComingNovember = data.getMovieComingNovember();
    this.movieComingDecember = data.getMovieComingDecember();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComingPage');
  }

  movieTapped(event,movie) {
    this.navCtrl.push(MovieDetailPage,movie) ;
  }
}

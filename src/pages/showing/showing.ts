import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
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
  movies: Array<any> = [];

  constructor(private data:DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.movies = data.getMovie() ;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowingPage');
  }

}

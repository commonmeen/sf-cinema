import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TheaterDataProvider,Theater } from '../../providers/theater-data/theater-data';


/**
 * Generated class for the TheaterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theater',
  templateUrl: 'theater.html',
})
export class TheaterPage {
  theaterDetail:Theater[]=[];
  


  constructor(public theater:TheaterDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.theater.loadTheater().subscribe(data => {this.theaterDetail = data ; }) ;
    console.log(this.theaterDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheaterPage');
    
  }

}



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;


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
  theaterDetail:Array<any>=[]


  constructor(private data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.theaterDetail= data.getTheatre() ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheaterPage');
    
  }

}



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail' ;
import { DataProvider } from '../../providers/data/data' ;
import { TicketPage } from '../ticket/ticket';
/**
 * Generated class for the ShowTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-time',
  templateUrl: 'show-time.html', 
})
export class ShowTimePage {
  theater : Array<any> = [] ;
  movie : any;
  nameTh: string;
  nameEn: string;
  date: string;
  type: string;
  rate: string;
  pic: string;
  minutes: string;
  directed: string;
  starring: string[];
  plot: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataProvider) {
  	this.movie = navParams.data ;
  	this.nameTh = navParams.get("nameTh");
    this.nameEn = navParams.get("nameEn");
    this.date = navParams.get("date");
    this.type = navParams.get("type");
    this.rate = navParams.get("rate");
    this.pic = navParams.get("pic");
    this.minutes = navParams.get("minutes");
    this.directed = navParams.get("directed");
    this.starring = navParams.get("starring"); 
    this.plot = navParams.get("plot");
    this.theater = data.getTheatre(); 
    console.log(this.movie) ;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowTimePage');
  }

  movieTapped(event,movie) {
    this.navCtrl.push(MovieDetailPage,movie) ;
  }

  ticketTapped($event,theater,time:string,showdate:string){  	
  	var i = {name:theater.name,date:showdate,t:time} ;
	this.navCtrl.push(TicketPage,i) ;
	//this.navCtrl.push(TicketPage,time) ; 
  }

}

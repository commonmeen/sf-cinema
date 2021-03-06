import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketPage } from '../ticket/ticket';
import { LoadingController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
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


  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public youtube: YoutubeVideoPlayer) {
    //this.presentLoading() ;
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }

  byTicket(event,nameTh){
    this.navCtrl.push(TicketPage,nameTh) ;
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  teaser() {
    this.youtube.openVideo('EuOlYPSEzSc');
  }
}

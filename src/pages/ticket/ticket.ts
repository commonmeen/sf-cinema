import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  totalSeat1:Array<any>=[];
  totalSeat2:Array<any>=[];
  totalSeatVip:Array<any>=[];
  byTicket:Array<string>=[]; 
  theater : any ;
  time : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=1; i<=84 ;i++){
      this.totalSeat1.push({num:i,pic:"sofa"}); 
     // console.log(i);
    }
    for(let i=85; i<=168 ;i++){
      this.totalSeat2.push({num:i,pic:"sofa"}); 
     // console.log(i);
    }
    for(let j=501; j<=506 ;j++){
      this.totalSeatVip.push({num:j,pic:"vip"});
     // console.log(j);
    }
   this.theater = navParams.data ;
   console.log(this.theater);
    //this.time = navParams.get("time");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  byTickets(t){
    if (t.pic == "sofa" || t.pic == "vip")
      t.pic = "correct" ;  
    else if (t.num < 200)
      t.pic = "sofa" ;
    else 
      t.pic = "vip" ; 

  }

  
}




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
  totalSeat:Array<string>=[];
  totalSeatVip:Array<string>=[];
  byTicket:Array<string>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=1; i<=84 ;i++){
      this.totalSeat.push(i+"");
      console.log(i);
    }
    for(let j=1; j<=6 ;j++){
      this.totalSeatVip.push(j+"");
      console.log(j);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }
  byTickets(t){
    this.byTicket=t;
    return this.byTicket;
  }

  
}




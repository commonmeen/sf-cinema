import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
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
  price : number = 0 ;
  nowSeat : Array<number>=[] ;
  sc : Screenshot ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public toastCtrl: ToastController,private screenshot: Screenshot) {
    this.presentLoading() ;
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
    this.sc = screenshot ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  byTickets(t) {
    if (t.pic == "sofa") {
      t.pic = "correct" ;  
      this.price = this.price + 160 ;
      this.nowSeat.push(t.num) ;
      const toast = this.toastCtrl.create({
        message: 'You add normal seat (160.-)',
        duration: 1500,
        position: 'bottom' 
      });
      toast.present();
    }
    else if (t.pic == "vip") {
      t.pic = "correct" ; 
      this.price = this.price + 220 ; 
      this.nowSeat.push(t.num) ;
      const toast = this.toastCtrl.create({
        message: 'You add VIP seat (220.-)',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
    else if (t.num < 200) {
      t.pic = "sofa" ;
      this.price = this.price - 160 ;
      var x1 = this.nowSeat.indexOf(t.num);
      if (x1!=0) {
        this.nowSeat.splice(x1,x1); }
        if (x1==0) {
        this.nowSeat.splice(x1,1);}
    console.log(x1);
    }
    else {
      t.pic = "vip" ; 
      this.price = this.price - 220 ;
      var x2 = this.nowSeat.indexOf(t.num);
      if (x2!=0){
      this.nowSeat.splice(x2,x2);
      }
    if (x2==0){
      this.nowSeat.splice(x2,1);} 
      console.log(x2);
    }
    
  }

   presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  scrShot() :void {
    this.sc.save('jpg', 80, '123.jpg')
    return ;
  }
}
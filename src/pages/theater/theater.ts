import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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


  constructor( public navCtrl: NavController, public navParams: NavParams) {
    this.theaterDetail=[
      {name:"เอส เอฟ เวิลด์ ซีเนม่า เซ็นทรัลเวิลด์",tel:"0-2268-8888",address:"7th FL. CentralWorld",open:"จ - พฤ 10:30 - 21:30 / ศ - อา 10:00 - 22:00",bus:["2","15","16","25","40","54","73","76","79","204","511","33"]},
      {name:"เอส เอฟ ซีเนม่า เดอะมอลล์ ท่าพระ",tel:"0-2268-8888",address:"5th FL. The Mall Thapra",open:"จ - ศ 11:00 - 21:30 / ส - อา และวันหยุดนักขัตฤกษ์ 10:00 - 21:30",bus:["15","57","68","101","108","147","195","205","ปอ.547"]},
      {name:"เอส เอฟ ซีเนม่า โรบินสัน กาญจนบุรี",tel:"034-603-333",address:"2th FL. Robinson Kanchanaburi",open:"09:30 - 22:00 ทุกวัน",bus:["รถสองแถวสีส้ม","มอเตอร์ไซค์รับจ้าง"]},
      {name:"เอส เอฟ ซีเนม่า โรบินสัน ตรัง",tel:"075-820-333",address:"2nd FL. Robinson Trang",open:"จ - พฤ 10:00 - 21:00 / ศ - อา 10:00 - 21:30",bus:[]},
      {name:"เอส เอฟ ซีเนม่า เซ็นทรัลมารีนา พัทยา",tel:"038-488-700",address:"3rd FL. CentralMarina Pattaya",open:"07:00 - 22:00 ทุกวัน",bus:["รถสองแถวสีน้ำเงิน"]}, 
      {name:"เอส เอฟ ซีเนม่า เทอร์มินอล 21 โคราช",tel:"044-498-999",address:"5th FL. Terminal 21 Korat",open:"10:00 - 22:00 ทุกวัน",bus:["7","10","14","15","17"]}, 
      {name:"เอส เอฟ ซีเนม่า โรบินสัน แม่สอด",tel:"055-530-444",address:"2nd FL. Robinson Maesot",open:"10:00 - 24:00 ทุกวัน",bus:[]}, 
      {name:"เอส เอฟ ซีเนม่า บิ๊กซี เพชรบุรี",tel:"032-474-355",address:"2nd FL. Big C Phetchaburi",open:"จ - ศ 11:00 - 22:00 / ส - อา และวันหยุดนักขัตฤกษ์ 09:30 - 22:00",bus:["รถตู้ ","รถสองแถว","รถบัส (สีแดง)"]}, 
      {name:"เอส เอฟ ซีเนม่า จังซีลอน ป่าตอง",tel:"076-600-555",address:"3rd FL. Jungceylon Patong",open:"11:00 - 22:00 ทุกวัน",bus:["รถโพถ้องสีฟ้า สาย กะตะ-กะรน-ป่าตอง"]}, 
      {name:"เอส เอฟ ซีเนม่า เสริมไทยคอมเพล็กซ์ มหาสารคาม",tel:"043-970-800",address:"2th FL. Sermthai Complex Mahasarakham",open:"จ - ศ 10:30 - 21:00 / ส - อา และวันหยุดนักขัตฤกษ์ 10:00 - 21:00",bus:["รถสองแถวสีน้ำเงินสาย 1","รถสองแถวสีเหลือง"]},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheaterPage');
    
  }

}



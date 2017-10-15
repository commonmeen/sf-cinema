import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  movies:Array<any>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movies=[
      {nameTh:"ฉลาดเกมส์โกง",nameEn:"Bad Genius",Date:"03-05-2017",Type:"Drama-Action",Rate:"15+",
      pic:"Bad Genius.jpg",
      minutes:"130",Directed:"นัฐวุฒิ พูนพิริยะ",Starring:["ชุติมณฑน์ จึงเจริญสุขยิ่ง","ชานน สันตินธรกุล","อิษยา ฮอสุวรรณ","ธีรดนย์ ศุภพันธ์ภิญโญ"],
      plot:"ทุกครั้งที่ฝนดินสอลงกระดาษสอบ ล้วนมีความหมาย ลิน (ชุติมณฑน์ จึงเจริญสุขยิ่ง) นักเรียนสายเรียนดี เจ้าของ เกรดเฉลี่ย 4.00 ทุกปีการศึกษา แต่ด้วยการที่เธอมักจะต้องช่วยบอกข้อสอบให้กับเพื่อนซี้อย่าง เกรซ (อิษยา ฮอสุวรรณ) นักเรียนสายกิจกรรมแต่ผลการเรียนกลับสวนทางและ พัฒน์ (ธีรดนย์ ศุภพันธุ์ภิญโญ) เด็กที่เติบโตมาในครอบครัวที่ร่ำรวยในและมีแนวคิดว่าเงินซื้อทุกอย่างได้แม้กระทั่งคำตอบของข้อสอบ ทำให้ ลิน ฉุกคิดธุรกิจให้ลอกข้อสอบนี้ขึ้นมาได้ และสร้างรายได้ให้เธออย่างเป็นกอบเป็นกำ และเมื่อการสอบสุดท้ายท้าย อย่าง STIC ใกล้เข้ามาถึง นักเรียนหลายร้อยคนต่างคาดหวังจะนำคะแนนสอบเหล่านี้เปิดทางเข้าสู่เหล่ามหาลัยชั้นนำ ลินจึงได้รับโจทย์ใหม่ ในการบอกข้อสอบสุดท้าทายครั้งนี้ โดยเธอตัดสินใจบินไปสอบที่ประเทศเร็วกว่าไทย เพื่อรีบนำมาบอกข้อสอบแก่เหล่าลูกค้าของเธอ โดยเธอต้องหาผู้ช่วยอย่าง แบงค์ (ชานน สันตินธรกุล) นักเรียนทุนคู่แข่ง ที่ไม่ชอบการทุจริตใดๆ ในขณะที่เดิมพันเงินรางวัลที่สูงมากขึ้น ความยากในการโกงข้อสอบและความปลอดภัยของพวกเธอก็สูงขึ้นเช่นกัน"
      }, 

      {nameTh:"นายไข่เจียวเสี่ยวตอร์ปิโด",nameEn:"",Date:"05-10-2017",Type:"Comedy",Rate:"15+",
      pic:"KaiJeaw.jpg",
      minutes:"100",Directed:"ปริภัณฑ์ วัชรานนท์",Starring:["ก้อง ห้วยไร่","สิงโต นำโชค","เซฟฟานี่ อาวะนิค"],
      plot:"เมื่อพี่โต๊ะ พันธมิตร เจ้าพ่อเสียงพากย์สุดหล่อพร้อมมุกแพรวพราว คันไม้คันมืออยากจะจัดหนังสนุก เฮฮา อีกซักเรื่องต่อจาก มนต์เลิฟสิบหมื่น ครั้งนี้จับ ก้อง ห้วยไร่ มาลงจอภาพยนตร์ครั้งแรก ปะทะสิงโต นำโชค กับเรื่องไข่ๆ ไอเดียบรรเจิด ที่เอาไข่เจียวอาหารเด็ดของคนไทยไม่แพ้ชาติใดในโลกมาเป็นอีกหนึ่งตัวละคร ถ่ายทอดเรื่องราวฟูฟูไปด้วยเสน่ห์ของรอยยิ้มและเสียงหัวเราะในแบบอารมณ์ดีสุดๆ ของมิตรภาพกลุ่มเพื่อนที่มีไข่เจียวเป็นศูนย์กลางกับภารกินดัน ไข่เจียวไทย ไปเป็น ไข่เจียวโลก เพิ่มรสชาติความสนุก ระเบิดระเบ้อเสียงหัวเราะแบบไม่มีกั๊กด้วย บอล เชิญยิ้ม ระดมเหล่าศิลปิน +ซูเปอร์สตาร์สุดเซอร์ไพรส์อีกเพียบ รับรองว่าดูเรื่องนี้ได้ทั้งความฮา ความหิว และร้องโอ้โห ชัวๆ"
      },

      {nameTh:"15+ ไอคิวกระฉูด",nameEn:"",Date:"03-08-2017",Type:"Comedy",Rate:"15+",
      pic:"15+IQ.jpg",
      minutes:"104",Directed:"อัศวนัยน์ กลิ่นเอี่ยม",Starring:["ยงศิลป์ วงศ์พนิตนนท์","พลอย ศรนรินทร์","ธนเศรษฐ์ สุริยะพรชัยกุล"],
      plot:"ภาพยนตร์วัยรุ่นตลกทะลึ่งน่าเอ็นดูที่หนุ่มยอร์ช แตกเนื้อหนุ่ม เปิดซิงรับบทนำครั้งแรกบนจอภาพยนตร์ เล่าเรื่องราวสนุกป่วนฮาของแก๊งวัยรุ่นวัยเห่ออายุ 15+ ฮอร์โมนพลุ่งพล่านที่ความอยากรู้อยากลองในเรื่องรักและเซ็กส์ของพวกเขาได้กระฉูดความวายป่วงออกมาแบบไม่ทันตั้งตัว"
      },

      {nameTh:"พรจากฟ้า",nameEn:"A gift",Date:"01-12-2016",Type:"Romantic-Drama-Comedy",Rate:"ทั่วไป",
      pic:"Porn Jak Far.jpg",
      minutes:"144",Directed:"จิระ มะลิกุล",Starring:["ฉันทวิชช์ ธนะเสวี","หนึ่งธิดา โสภณ","ซันนี่ สุวรรณเมธานนท์","นิษฐา จิรยั่งยืน","ณภัทร เสียงสมบุญ","วิโอเลต วอเทียร์"],
      plot:"ได้รับแรงบันดาลใจจากเพลงพระราชนิพนธ์ใน พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช 3 เพลงคือ ยามเย็น (Love at sundown), ในดวงใจนิรันดร์ (Still on my Mind) และ พรปีใหม่ ผ่านการเล่าเรื่องราวของหนุ่มสาว 3 คู่ที่มีลักษณะในการใช้ชีวิตที่แตกต่างกันไป"
      },

      {nameTh:"เมฆาถล่มโลก",nameEn:"geostorm",Date:"12-10-2017",Type:"Action",Rate:"ทั่วไป",
      pic:"geostorm.jpg",
      minutes:"110",Directed:"ดีน เดฟลิน",Starring:["Gerard Butler","Jim Sturgess","Abbie Cornish","Ed Harris","Andy Garcia"],
      plot:"ในอนาคตอันอีกไม่ไกล โลกจะมีดาวเทียมเพื่อช่วยควบคุมภูมิอากาศให้ทุกอย่างปกติ แต่วันดีคืนดี เจ้าดาวเทียมตัวนี้เกิดขัดข้องแล้วมันก็ก่อให้เกิดมหาภัยพิบัติทางธรรมชาติขึ้นทั่วโลก ทั้งสึนามิ, พายุลูกเห็บ, ลาวา, ทอร์นาโด, อากาศหนาวจัด และอีกมากมาย แต่โชคยังดีอยู่บ้างที่โลกมีนักวิศวกรด้านวิทยาศาสตร์ที่รับบทโดยเจอราร์ด บัตเลอร์ และเขาคือความหวังเดียวของมนุษยชาติที่จะขึ้นสู่อวกาศไปซ่อมเจ้าดาวเทียมเครื่องนี้ เรื่องราวสุดระทึกใน Geostorm เกิดขึ้นเมื่อดาวเทียมควบคุมภูมิอากาศของโลกเกิดความเสียหาย จนทำให้สภาพอากาศทั่วโลกแปรปรวนถึงขีดสุด แต่เมื่อชายสองพี่น้องเดินทางขึ้นไปซ่อมแซมดาวเทียมในอวกาศ สิ่งที่พวกเขาค้นพบคือแผนการลอบสังหารประธานาธิบดีสหรัฐฯ ที่ซ่อนอยู่เบื้องหลังหายนะครั้งนี้ "
      },

      {nameTh:"สึไค จับเด็กไปเป็นผี",nameEn:"Little Nightmares",Date:"16-11-2017",Type:"Horror",Rate:"15+",
      pic:"Little Nightmares.jpg",
      minutes:"111",Directed:"Takashi Shimizu",Starring:["Daiki Arioka","Hyunri","Mugi Kadowaki"],
      plot:"เมื่อเด็กที่ถูกทารุณกรรมกลับมาหลังจากที่พวกเขาหายไป พวกเขาพบความตายลึกลับหลังจากผ่านไป 3 วัน ผู้สื่อข่าวหนังสือพิมพ์ท้องถิ่น Shunya สืบสวนการเสียชีวิตขณะที่แฟนสาวของเขานาโอมิเข้าไปใกล้เด็กผีสิงมากเกินไป"
      },

      {nameTh:"ครอบครัวตัวป่วน ก๊วนปีศาจ",nameEn:"Monster Family",Date:"15-03-2018",Type:"Animation",Rate:"ทั่วไป",
      pic:"Monster Family.jpg",
      minutes:"90+",Directed:"Holger Tappe",Starring:["Nick Frost","Jason Isaacs","Emily Watson"],
      plot:"Madea jumps into action when her niece, Shirley, receives distressing news about her health. All Shirley wants is to gather her three adult children around her and share the news as a family. But Tammy, Kimberly and Byron are too distracted by their own problems: Tammy can't manage her unruly children or her broken marriage; Kimberly is gripped with anger and takes it out on her husband; and Byron, after spending two years in jail, is under pressure to deal drugs again. It's up to Madea, with the help of the equally rambunctious Aunt Bam, to gather the clan together and make things right the only way she knows how: with a lot of tough love, laughter and the revelation of a long-buried family secret."
      },


      
    ];
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowingPage');
  }

}

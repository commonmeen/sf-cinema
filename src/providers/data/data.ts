import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
	movies : Array<any> = [];
	theatres : Array<any> = [];
	promotions : Array<any> = [] ;
  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getMovie() : Array<any> {
  	this.movies =
  	[	{
        nameTh: "วันหมาหอนที่ค่ายลูกเสือ", nameEn: "Black Full Moon", date: "12 October 2017", type: "Horror", rate: "15+",
        pic: "full moon.jpg",
        minutes: "85", directed: "พิรุณ อนุสุริยา", starring: [],
        plot: "เรื่องราวการหายตัวไปอย่างลึกลับของกลุ่มวัยรุ่น 5 คน ที่เป็นที่รู้จักในโซเชียลมีเดีย ผู้ทำรายการในยูทูปที่ชื่อ เกรียนท้าผี ทางตำรวจได้เข้าไปพบกล้องที่บันทึกเหตุการณ์ หลังพบศพทั้งห้าเสียชีวิตโดยปริศนาในค่ายลูกเสือร้างจังหวัดระยอง ผู้รอดชีวิตในเหตุการณ์นั้น ได้แก่ ทีมงานเบื้องหลัง 3 คน ได้ให้การว่าพวกตนได้เข้าไปในค่ายลูกเสือตามคำชักชวนของโปรดิวเซอร์ดัง ฟลินท์ ศุภชัย พร้อมด้วย หมีเพื่อนผี นักเล่าเรื่องเจ้าของเรื่องดังอย่าง ผีค่ายลูกเสือ และนั่นเป็นที่มาของการกระทบกระทั่งจนดีเจชื่อดังอย่าง บุ๊คโกะ ขอถอนตัวจากรายการนี้กลางคัน โดยไม่ทราบเลยว่าต่อมาทั้งห้าคนในรายการได้เสียชีวิตลง ในเบื้องต้นยังไม่พบมูลเหตุแห่งการฆาตกรรม แต่ทุกศพต่างมีร่องรอยของการต่อสู้ โดยเรื่องราวที่จะได้ชมคือเหตุการณ์บางส่วนที่ยังคลุมเครือ แต่กล้องบันทึกเอาไว้ได้"
      },

      {
        nameTh: "เมฆาถล่มโลก", nameEn: "Geostorm", date: "12 October 2017", type: "Action", rate: "ทั่วไป",
        pic: "geostorm.jpg",
        minutes: "110", directed: "ดีน เดฟลิน", starring: ["Gerard Butler", "Jim Sturgess", "Abbie Cornish", "Ed Harris", "Andy Garcia"],
        plot: "ในอนาคตอันอีกไม่ไกล โลกจะมีดาวเทียมเพื่อช่วยควบคุมภูมิอากาศให้ทุกอย่างปกติ แต่วันดีคืนดี เจ้าดาวเทียมตัวนี้เกิดขัดข้องแล้วมันก็ก่อให้เกิดมหาภัยพิบัติทางธรรมชาติขึ้นทั่วโลก ทั้งสึนามิ, พายุลูกเห็บ, ลาวา, ทอร์นาโด, อากาศหนาวจัด และอีกมากมาย แต่โชคยังดีอยู่บ้างที่โลกมีนักวิศวกรด้านวิทยาศาสตร์ที่รับบทโดยเจอราร์ด บัตเลอร์ และเขาคือความหวังเดียวของมนุษยชาติที่จะขึ้นสู่อวกาศไปซ่อมเจ้าดาวเทียมเครื่องนี้ เรื่องราวสุดระทึกใน Geostorm เกิดขึ้นเมื่อดาวเทียมควบคุมภูมิอากาศของโลกเกิดความเสียหาย จนทำให้สภาพอากาศทั่วโลกแปรปรวนถึงขีดสุด แต่เมื่อชายสองพี่น้องเดินทางขึ้นไปซ่อมแซมดาวเทียมในอวกาศ สิ่งที่พวกเขาค้นพบคือแผนการลอบสังหารประธานาธิบดีสหรัฐฯ ที่ซ่อนอยู่เบื้องหลังหายนะครั้งนี้ "
      },

      {
        nameTh: "คนพันธุ์กูล", nameEn: "Tokyo Ghoul", date: "12 October 2017", type: "Action", rate: "18+",
        pic: "tokyo.jpg",
        minutes: "120", directed: "Kentaro Hagiwara", starring: ["Yu Aoi", "Masataka Kubota", "Yo Oizumi"],
        plot: "เรื่องราวของ คาเนกิ เคน นักศึกษามหาลัยที่ชอบอ่านหนังสือเป็นชีวิตจิตใจ เขาพบกับ ริเสะ สาวในร้านคาเฟ่ที่ชอบไปประจำ เพราะความชอบที่เหมือนกันทำให้ทั้งคู่สนิทกันได้เร็ว แต่แล้วคืนหนึ่งชีวิตของเขาก็ต้องเปลี่ยนไปตลอดกาล เพราะความจริงแล้ว ริเสะ คือ กูล สิ่งมีชีวิตที่กินมนุษย์เป็นอาหาร ถึงแม้ว่า คาเนกิ จะมีชีวิตรอดจากการถูกกิน แต่เขาก็บาดเจ็บหนักจนต้องเปลี่ยนถ่ายอวัยวะ แต่เมื่อฟิ้นเขาก็ค้นพบว่าตัวเองได้กลายเป็นครึ่งมนุษย์ครึ่งกูล และไม่สามารถทานอาหารของมนุษย์ได้อีกต่อไป คาเนกิ ยังค้นพบว่าร้านกาแฟ อันเทย์คุ นั่นคือเป็นแหล่งรวมตัวของเหล่ากูล และมันก็คือจุดเริ่มต้นของเขาในการใช้ชีวิตสายพันธุ์ใหม่ในมหานครโตเกียว"
      },

      {
        nameTh: "มาย ลิตเติ้ลโพนี่ เดอะมูฟวี่", nameEn: "My Little Pony : The Movie", date: "12 October 2017", type: " Animation", rate: "ทั่วไป",
        pic: "pony.jpg",
        minutes: "100", directed: "Jayson Thiessen", starring: ["Uzo Aduba", "Emily blunt", "Zoe Saldana"],
        plot: "When a dark force threatens Ponyville and the Mane 6, they go on a journey to the end of Equestria to save their beloved home and they meet new friends and dangerous challenges along the way."
      },

      {
        nameTh: "ราชินีและคนสนิท", nameEn: "Victoria and abdul", date: "12 October 2017", type: " Animation", rate: "13",
        pic: "victoria.jpg",
        minutes: "125", directed: "Stephen Frears", starring: ["Judi Dench", "Ali Fazal", "Eddie Izzard"],
        plot: "เรื่องราวของความสัมพันธ์อันละเอียดอ่อนและค่อนข้างเป็นความลับของ สมเด็จพระราชินีวิคตอเรีย แห่งอังกฤษ กับคุณครูหนุ่มชาวอินเดียผู้ใกล้ชิด มีหน้าที่เป็นเลขานุการอินเดียประจำพระองค์ คอยถวายคำปรึกษาและคำแนะนำต่างๆ เกี่ยวกับกิจการของอินเดีย ทั้งการเมือง เศรษฐกิจ สังคม วัฒนธรรม รวมทั้งยังมีการสอนภาษาฮินดีและอูรดูแก่ราชินีอีกด้วย เด็กหนุ่มมุสลิมผู้นั่นมีนามว่า Abdul Karim"
      },

      {
        nameTh: "นายไข่เจียวเสี่ยวตอร์ปิโด", nameEn: "", date: "05 October 2017", type: "Comedy", rate: "15+",
        pic: "KaiJeaw.jpg",
        minutes: "100", directed: "ปริภัณฑ์ วัชรานนท์", starring: ["ก้อง ห้วยไร่", "สิงโต นำโชค", "เซฟฟานี่ อาวะนิค"],
        plot: "เมื่อพี่โต๊ะ พันธมิตร เจ้าพ่อเสียงพากย์สุดหล่อพร้อมมุกแพรวพราว คันไม้คันมืออยากจะจัดหนังสนุก เฮฮา อีกซักเรื่องต่อจาก มนต์เลิฟสิบหมื่น ครั้งนี้จับ ก้อง ห้วยไร่ มาลงจอภาพยนตร์ครั้งแรก ปะทะสิงโต นำโชค กับเรื่องไข่ๆ ไอเดียบรรเจิด ที่เอาไข่เจียวอาหารเด็ดของคนไทยไม่แพ้ชาติใดในโลกมาเป็นอีกหนึ่งตัวละคร ถ่ายทอดเรื่องราวฟูฟูไปด้วยเสน่ห์ของรอยยิ้มและเสียงหัวเราะในแบบอารมณ์ดีสุดๆ ของมิตรภาพกลุ่มเพื่อนที่มีไข่เจียวเป็นศูนย์กลางกับภารกินดัน ไข่เจียวไทย ไปเป็น ไข่เจียวโลก เพิ่มรสชาติความสนุก ระเบิดระเบ้อเสียงหัวเราะแบบไม่มีกั๊กด้วย บอล เชิญยิ้ม ระดมเหล่าศิลปิน +ซูเปอร์สตาร์สุดเซอร์ไพรส์อีกเพียบ รับรองว่าดูเรื่องนี้ได้ทั้งความฮา ความหิว และร้องโอ้โห ชัวๆ"
      },

      {
        nameTh: "The lego ninjago movie", nameEn: "The lego ninjago movie", date: "05 October 2017", type: "Animation", rate: "ทั่วไป",
        pic: "lego.jpg",
        minutes: "100", directed: "Charlie Bean", starring: ["Dave Franco", "Olivia Munn", "Justin Theroix"],
        plot: "การต่อสู้เพื่อเมืองนินจาโกที่ต้องอาศัยลอยด์ผู้เยาว์วัย หรือในชื่อว่านินจาเขียว พร้อมกับเพื่อนๆ ของเขาที่ล้วนเป็นนักรบปริศนาและ LEGO Master Builders ที่นำโดย ปรมาจารย์กังฟูวู ผู้มีความอัจฉริยะปราดเปรื่อง พวกเขาต้องต่อสู้เอาชนะผู้นำที่ชั่วร้ายอย่างการ์มาดอน ผู้ร้ายตลอดกาลที่กลายเป็นพ่อของลอยด์ การเผชิญหน้าระหว่างจักรกลต่อจักรกล พ่อกับลูก การเผชิญหน้าครั้งใหญ่นี้จะเป็นบททดสอบนินจารุ่นใหม่ที่มีความโหดเหี้ยมแต่ไร้ระเบียบวินัย ซึ่งพวกเขาจะได้เรียนรู้วิธีตรวจสอบอีโก้ของตัวเอง และรู้จักควบคุมอารมณ์เพื่อแสดงพลังที่แท้จริงของพวกเขาออกมา"
      },

      {
        nameTh: "เบลด รันเนอร์ 2049", nameEn: "Blade Runner 2049", date: "05 October 2017", type: "Sci - Fi", rate: "15+",
        pic: "blade.jpg",
        minutes: "165", directed: "Denis Villeneuve", starring: ["Ana de Armas", "Harrison Ford", "Ryan Gosling"],
        plot: "เป็นเรื่องราวใน 30 ปีให้หลังจากภาคแรก เมื่อเจ้าหน้าที่เค (Officer K) ซึ่งนำแสดงโดย Ryan Gosling ที่เป็น เบลดรันเนอร์ (Blade Runner) คนล่าสุดได้เข้ามาประจำการที่เมืองลอสแอนเจลิส  ซึ่งเขาได้พยายามสืบข้อมูลของ ริค เดซคาร์ด(Rick Deckard) ซึ่งนำแสดงโดย Harrison Ford บุคคลหายสาบสูญไปนานถึงสามสิบปีเต็ม"
      },

      {
        nameTh: "2 โคตรพยัคฆ์ผู้ยิ่งใหญ่", nameEn: "The Foreigner", date: "28 September 2017", type: "Action", rate: "15+",
        pic: "foreigner.jpg",
        minutes: "110", directed: "Martin Campbell", starring: ["Charlie Murphy", "Jackie Chan", "Pierce Brosnan"],
        plot: "ไม่ต้องให้รอนานจนคิดถึง เร็วๆ นี้ เตรียมพบกับมหากาพย์แอ็คชั่นครั้งใหม่ของพระเอกหนังบู๊ผู้เป็นตำนาน แจ๊คกี้ ชาน กลับมาลุยอีกครั้งใน The Foreigner ในครั้งนี้เขารับบทเจ้าของภัตตราคารอาหารจีนในลอนดอนที่เป็นที่รักของลูกค้า จู่ๆ วันหนึ่งลูกและภรรยาของเขาถูกกลุ่มกบฏ IRA ลักพาตัวไป เมื่อไปขอความช่วยเหลือจากตำรวจพวกเขากลับทาเป็นไม่รู้ไม่เห็น เขาต้องลงมือทวงทั้งคู่คืนมาด้วยตัวของเขาเองด้วยวิธีสุดระห่ำที่จะทำให้ทุกคนลืมภาพคุณลุงผู้ใจดีไปหมดสิ้น สร้างจากนิยายขายดีเรื่อง The Chinaman ที่วางจำหน่ายเมื่อปี 2008 จากปลายปากกาของ สตีเฟ่น เลเธอร์ นักเขียนแนวเขย่าขวัญอาชญากรรมชื่อดัง ได้ผู้กำกับมากฝีมืออย่าง มาร์ติน แคมป์เบลล์ ที่ฝากฝีมือไว้ในเฟรนไชส์สายลับตลอดการ เจมส์ บอนด์ มาแล้วใน Casino Royale และ Goldeneye เท่านั้นยังไม่พอยังได้ เพียซ บรอสแนน อดีตสายลับ 007 ตัวจริงมาร่วมสร้างสีสัน เขารับบทเป็นอดีตสมาชิก IRA ที่กลับตัวมาเป็นเจ้าหน้าที่ให้รัฐบาล หนังเรื่องนี้เป็นการโคจรกลับมาร่วมงานกันครั้งแรกของ แคมป์เบลล์ และ บรอสแนน หลังจาก Goldeneye เมื่อปี 1995"
      },

      {
        nameTh: "คิงส์แมน เดอะ โกลเด้น เซอร์เคิล", nameEn: "Kingsman: The Golden Circle", date: "21 September 2017", type: "Action", rate: "15+",
        pic: "kingsman.jpg",
        minutes: "140", directed: "Matthew Vaughn", starring: ["Taron Egerton", "Colin Firth", "Mark Strong"],
        plot: "Kingsman: The Golden Circle จะเดินเรื่องต่อจากเหตุการณ์การโจมตีทั่วโลกในท้ายภาคแรก โดยที่ เอ็กซ์ซี่ (ทารอน อีเกอร์ตัน) และ เมอร์ลิน (มาร์ค สตรอง) มุ่งหน้าไปยังสหรัฐอเมริกา เพื่อร่วมทีมกับฝั่งสำนักงานใหญ่ในอเมริกาช่วยกันกอบกู้โลก ซึ่งทางฝั่งสหรัฐอเมริกานั้นก็ได้นักแสดงอย่าง ฮัลลี่ เบอร์รี่ มานำทีมด้วย"
      },

      {
        nameTh: "ก้าวเดินกับฉัน", nameEn: "Walk With Me", date: "21 September 2017", type: "DOCUMENTARY", rate: "ทั่วไป",
        pic: "walk.jpg",
        minutes: "90", directed: "Marc J. Francis", starring: ["Benedict", "Thich Nhat"],
        plot: "เรื่องราวของหลวงปู่ ติช นัท ฮันห์ เป็นพระภิกษุชาวเวียดนาม ผู้นำเสนอความคิด พุทธศาสนาต้องเป็นส่วนหนึ่งของชีวิตประจำวัน และพุทธธรรม เป็นสิ่งที่สามารถประยุกต์ใช้ให้เข้ากับวิธีชีวิตยุคปัจจุบันได้"
      },

      {
        nameTh: "เพื่อน..ที่ระลึก", nameEn: "The Promise", date: "7 September 2017", type: "Horror", rate: "18+",
        pic: "friend.jpg",
        minutes: "115", directed: "โสภณ ศักดาพิศิษฏ์", starring: [],
        plot: "เมื่อ คำสัญญา และ เพื่อนรัก จะกลับมาทำให้คุณระลึกและระทึกไปพร้อมกันผ่านไป 20 ปี บุ๋ม (บี น้ำทิพย์ จงรัชตวิบูลย์) เติบโตกลายเป็นนักธุรกิจด้านอสังหาริมทรัพย์ และได้กลับไปที่ตึกนั้นอีกครั้ง พร้อมกับ เบล (ลิลลี่ อภิชญา ทองคำ) ลูกสาวผู้เป็นทุกสิ่งทุกอย่างในชีวิตของเธอคืนนั้นหลังกลับจากตึกก็เกิดเรื่องประหลาดขึ้นกับเบล เมื่อบุ๋มตื่นขึ้นมาพบเบลนั่งคุยกับใครบางคน แม้จะอยู่ในความมืด บุ๋มก็รู้ว่าที่นั่งฝั่งตรงข้ามของเบลว่างเปล่า ไม่มีใครเลย แล้วทุกคืนหลังจากนั้นก็กลายเป็นฝันร้ายของบุ๋ม เมื่อทุกครั้งที่หลับตานอน เบลจะตื่นขึ้นมาด้วยอาการละเมอที่หนักขึ้นเรื่อยๆ และที่ร้ายแรงที่สุดก็คือ เบลจะละเมอพูดหรือทำในสิ่งที่ทำให้บุ๋มระลึกถึง อิ๊บ เพื่อนเก่าที่เธอทิ้งให้รออยู่ที่ตึกอย่างโดดเดี่ยวมาเป็นเวลานาน นี่อาจเป็นการกลับมาทวงคำสัญญาสุดท้ายที่อิ๊บเคยขอไว้ก่อนจากโลกนี้ไป...สัญญานะ ว่าแกจะไม่ปล่อยให้ฉันตายคนเดียว"
      }]

      return this.movies ;
  }

  getTheatre() : Array<any> {
  	this.theatres = [
		{name:"เอส เอฟ เวิลด์ ซีเนม่า เซ็นทรัลเวิลด์",tel:"0-2268-8888",address:"7th FL. CentralWorld",open:"จ - พฤ 10:30 - 21:30 / ศ - อา 10:00 - 22:00",bus:["2","15","16","25","40","54","73","76","79","204","511","33"]},
      {name:"เอส เอฟ ซีเนม่า เดอะมอลล์ ท่าพระ",tel:"0-2268-8888",address:"5th FL. The Mall Thapra",open:"จ - ศ 11:00 - 21:30 / ส - อา และวันหยุดนักขัตฤกษ์ 10:00 - 21:30",bus:["15","57","68","101","108","147","195","205","ปอ.547"]},
      {name:"เอส เอฟ ซีเนม่า โรบินสัน กาญจนบุรี",tel:"034-603-333",address:"2th FL. Robinson Kanchanaburi",open:"09:30 - 22:00 ทุกวัน",bus:["รถสองแถวสีส้ม","มอเตอร์ไซค์รับจ้าง"]},
      {name:"เอส เอฟ ซีเนม่า โรบินสัน ตรัง",tel:"075-820-333",address:"2nd FL. Robinson Trang",open:"จ - พฤ 10:00 - 21:00 / ศ - อา 10:00 - 21:30",bus:[]},
      {name:"เอส เอฟ ซีเนม่า เซ็นทรัลมารีนา พัทยา",tel:"038-488-700",address:"3rd FL. CentralMarina Pattaya",open:"07:00 - 22:00 ทุกวัน",bus:["รถสองแถวสีน้ำเงิน"]}, 
      {name:"เอส เอฟ ซีเนม่า เทอร์มินอล 21 โคราช",tel:"044-498-999",address:"5th FL. Terminal 21 Korat",open:"10:00 - 22:00 ทุกวัน",bus:["7","10","14","15","17"]}, 
      {name:"เอส เอฟ ซีเนม่า โรบินสัน แม่สอด",tel:"055-530-444",address:"2nd FL. Robinson Maesot",open:"10:00 - 24:00 ทุกวัน",bus:[]}, 
      {name:"เอส เอฟ ซีเนม่า บิ๊กซี เพชรบุรี",tel:"032-474-355",address:"2nd FL. Big C Phetchaburi",open:"จ - ศ 11:00 - 22:00 / ส - อา และวันหยุดนักขัตฤกษ์ 09:30 - 22:00",bus:["รถตู้ ","รถสองแถว","รถบัส (สีแดง)"]}, 
      {name:"เอส เอฟ ซีเนม่า จังซีลอน ป่าตอง",tel:"076-600-555",address:"3rd FL. Jungceylon Patong",open:"11:00 - 22:00 ทุกวัน",bus:["รถโพถ้องสีฟ้า สาย กะตะ-กะรน-ป่าตอง"]}, 
      {name:"เอส เอฟ ซีเนม่า เสริมไทยคอมเพล็กซ์ มหาสารคาม",tel:"043-970-800",address:"2th FL. Sermthai Complex Mahasarakham",open:"จ - ศ 10:30 - 21:00 / ส - อา และวันหยุดนักขัตฤกษ์ 10:00 - 21:00",bus:["รถสองแถวสีน้ำเงินสาย 1","รถสองแถวสีเหลือง"]}
  	]
  	return this.theatres ;
  }

  getPromotion() : Array<any> {
  	this.promotions = [
		{name:"Black Full Moon Promotion", subname:"Black Full Moon Promotion",
			detail:"ชมภาพยนตร์เรื่อง วันหมาหอนที่ค่ายลูกเสือ (Black Full Moon) ในราคาพิเศษ 79 บาท , 89 บาท และ 99 บาท (Deluxe Seat) ที่โรงภาพยนตร์ในเครือเอส เอฟ ทุกสาขาที่ร่วมรายการ -  สาขาที่ราคา 79 บาท (Deluxe Seat) , 99 บาท (Premium Seat) : เดอะสแควร์บางใหญ่ , สุนีย์ ทาวเวอร์ อุบลราชธานี , โรบินสัน บุรีรัมย์	-  สาขาที่ราคา 89 บาท (Deluxe Seat) , 109 บาท (Premium Seat) : โรบินสันศรีสมาน , บิ๊กซีบางพลี , แลนด์มาร์คพลาซ่า อุดรธานี , เซ็นทรัลขอนแก่น  , โรบินสัน สุรินทร์ , เสริมไทย คอมเพล็กซ์ มหาสารคาม -  สาขาที่ราคา 99 บาท (Deluxe Seat) , 119 บาท (Premium Seat) : เดอะมอลล์บางกะปิ , เดอะมอลล์งามวงศ์วาน " ,
			date:"ตั้งแต่วันที่ 12 ตุลาคม 2560 – ตลอดโปรแกรมฉาย", 
			condition:["สามารถซื้อบัตรชมภาพยนตร์ เรื่อง วันหมาหอนที่ค่ายลูกเสือ (Black Full Moon) ในราคาพิเศษ 79 บาท , 89 บาท , 99 บาท (Deluxe Seat) และ 99 บาท , 109 บาท , 119 บาท (Premium Seat) ที่โรงภาพยนตร์ในเครือ เอส เอฟ ทุกสาขาที่ภาพยนตร์เข้าฉายทั่วประเทศ",
			"สามารถรับส่วนลดได้ตั้งแต่วันที่ 12 ตุลาคม 2560 – ตลอดโปรแกรมฉาย","สามารถซื้อบัตรชมภาพยนตร์ได้เฉพาะที่จุดจำหน่ายบัตรชมภาพยนตร์เท่านั้น","ไม่สามารถใช้ร่วมกับบัตรส่วนลด หรือกิจกรรมส่งเสริมด้านราคาอื่นๆ",
			"สามารถใช้ร่วมกับกิจกรรม SF-COKE Movie Plus ดูหนัง 2 เรื่องฟรีเรื่องที่ 3"," ไม่สามารถแลก เปลี่ยน หรือทอนเป็นเงินสดได้"," บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงรายละเอียดโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
			branches:"โรงภาพยนตร์ในเครือ เอส เอฟ ทุกสาขาทั่วประเทศที่เข้าฉาย",
			pic:"Black Full Moon Pro.jpg"
			},
	
			{name:"สิทธิพิเศษสำหรับลูกค้าใหม่ที่ดาวน์โหลด Application SF Cinema รับ Popcorn Size M ฟรี", subname:"โหลด Application SF Cinema...",
			detail:"สิทธิพิเศษสำหรับลูกค้าใหม่ที่ดาวน์โหลด  Application SF Cinema บริเวณหน้าจุดจำหน่ายบัตรชมภาพยนตร์เท่านั้น  รับคูปองแจกฟรี Popcorn Size M จำนวน 1 กล่อง" ,
			date:"ตั้งแต่วันที่ 16 ตุลาคม – 15 ธันวาคม 2560 (หรือจนกว่าจะครบ 30,000 สิทธิ์)", 
			condition:["สิทธิพิเศษนี้สำหรับลูกค้าใหม่ที่ดาวน์โหลด Application SF Cinema ครั้งแรกเท่านั้น"," ลูกค้าสามารถใช้สิทธิ์โดยแสดงคูปองฟรี Popcorn Size M ที่หน้าจุดจำหน่ายเครื่องดื่มและป๊อปคอร์น",
			"ไม่สามารถใช้สิทธิ์ร่วมกับกิจกรรมส่งเสริมการขายรายการอื่นๆได้","ลูกค้าไม่สามารถ Upgrade Size หรือเปลี่ยนเป็นชุดอื่นได้","ลูกค้าไม่สามารถแลกเปลี่ยน หรือทอนเป็นเงินสดได้","ลูกค้าสามารถนำคูปองไปแลกรับ Popcorn Size M ฟรีได้ถึงวันที่ 31 ธันวาคม 2560 ",
			"บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงรายละเอียดโดยไม่ต้องแจ้งให้ทราบล่วงหน้า","จำกัด 1 ดาวน์โหลด /1คน /1 สิทธิ์","ลูกค้าสามารถรับคูปองได้ถึงวันที่ 15 ธันวาคม 2560"],
			branches:"โรงภาพยนตร์ในเครือ เอส เอฟ ทุกสาขา ยกเว้นสาขาบิ๊กซี ปราจีนบุรี",
			pic:"Application SF Cinema Pro.jpg"
			},

			{name:"Samsung Pay Promotion", subname:"Samsung Pay Promotion",
			detail:"ลูกค้าใหม่ที่ลงทะเบียน Samsung Pay ด้วยบัตร Mastercard และได้รับโค้ดรับสิทธิ์" ,
			date:"ตั้งแต่วันที่ 18 กันยายน - 31 ธันวาคม 2560", 
			condition:["ลูกค้า Samsung Galaxy ต้องทำการลงทะเบียน Samsung Pay และ เพิ่มบัตรเครดิต Mastercard ใน Samsung Pay เพื่อรับสิทธิ์ซื้อบัตรชมภาพยนตร์ประเภท Deluxe Seat (2D) จำนวน 1 ที่นั่ง ราคาที่นั่งละ 8 บาท",
			"ลูกค้าต้องชำระเงินค่าบัตรชมภาพยนตร์ผ่านบัตรเครดิต Mastercard ที่ลงทะเบียน Samsung Pay เท่านั้น","สามารถรับสิทธิ์ได้เพียง 1 สิทธิ์ ต่อสมาร์ทโฟน 1 เครื่อง ต่อบัตรเครดิต Mastercard 1 ใบ",
			"จำกัดสิทธิ์เฉพาะลูกค้า 10,000 ท่านแรก ที่ทำการเพิ่มบัตรเครดิต Mastercard ใน Samsung Pay พร้อมใช้ซื้อสินค้าหรือบริการอย่างน้อย 1 ครั้งในระยะเวลากิจกรรม ตั้งแต่วันที่ 18 กันยายน - 31 ธันวาคม 2560",
			"โค้ดดังกล่าวไม่สามารถแลกเปลี่ยน หรือทอนเป็นเงินสดได้"," บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
			branches:"โรงภาพยนตร์ในเครือ SF ทุกสาขา (ยกเว้น Emprive’ Cineclub และสาขาบิ๊กซี ปราจีนบุรี)",
			pic:"Samsung Pay Pro.jpg" 
			},

			{name:"Central The 1 Credit Card Promotion", subname:"The 1 Credit Card Promotion",
			detail:"สิทธิพิเศษ ส่วนลด 50% สำหรับที่นั่งเฟิร์สคลาส ระบบ Digital 2D ทุกเรื่องทุกรอบ พร้อมบริการห้องรับรองพิเศษ ด้วยเครื่องดื่มและอาหารว่าง,ลูกค้าต้องชำระด้วยบัตรเครดิต เซ็นทรัล เดอะวัน เดอะแบล็ค และแบล็ค เท่านั้น" ,
			date:"ตั้งแต่วันที่ 5 มีนาคม 2560 – 28 กุมภาพันธ์ 2561", 
			condition:["จำกัดส่วนสดสูงสุด 2 ใบ/ บัตร/ วัน","จำกัดสิทธิ์ทั้งหมด 80 สิทธิ์ต่อเดือน สำหรับบัตรเครดิต เซ็นทรัล เดอะวัน แบล็ค "],
			branches:"โรงภาพยนตร์เอส เอฟ เวิลด์ ซีเนม่า สาขาเซ็นทรัลเวิลด์ เท่านั้น",
			pic:"1 Credit Card Pro.jpg"
			},

			{name:"Emprivé Cineclub Movie Night Promotion", subname:"Emprivé Cineclub Movie Night",
			detail:"วันอาทิตย์ - วันพุธ หลัง 21.00 น ชมภาพยนตร์ในราคาพิเศษ เริ่มต้นเพียง 200 บาท" ,
			date:"ตั้งแต่วันที่ 9 กุมภาพันธ์ 2559 เป็นต้นไป", 
			condition:["ลูกค้าสามารถรับสิทธิ์ชมภาพยนตร์ ในราคา Movie Night Price คือราคา เริ่มต้น 200 บาท ต่อที่นั่ง","สามารถมารับสิทธิ์ได้ทุกเรื่อง ในรอบฉายหลัง  เวลา 21.00 น. เฉพาะที่นั่ง Executive Seat เท่านั้น",
			"โปรโมชั่นดังกล่าวสามารถใช้สิทธิ์ในวันหยุดพิเศษได้ เฉพาะ วันหยุดพิเศษที่ตรงกับกับ วันจันทร์ - อังคาร ชำระค่าบัตรชมภาพยนตร์ในฐานราคา Movie Night Price ของวันอาทิตย์","บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงโปรโมชั่นดังกล่าว โดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
			branches:"โรงภาพยนตร์ Emprivé Cineclub",
			pic:"Movie Night Pro.jpg"
			}
  	]
  	return this.promotions ;
  }
}

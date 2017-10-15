import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';




/*
  Generated class for the TheaterDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TheaterDataProvider {
  theaterDetail: Theater[]=[];
  path: string = 'https://api.myjson.com/bins/tc749'
  

  constructor(public http: Http) {
    console.log('Hello TheaterDataProvider Provider');
  }

  loadTheater(): Observable<Theater[]> {
  	return this.http.get(this.path)
  		.map( response => response.json().theaterDetail ) ;
  }

}

export class Theater{
  name:string;
  address:string;
  tel:string;
  open:string
  bus:Array<string>;
}

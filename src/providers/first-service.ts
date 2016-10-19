import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirstService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirstService {

  firstip:string;
  firstport:string;
  constructor(public http: Http) {
    this.firstip = "Hello";
    this.firstport = "80";
  }

  getFirstIP(){
    return this.firstip;
  }
  getFirstPORT(){
    return this.firstport;
  }

}

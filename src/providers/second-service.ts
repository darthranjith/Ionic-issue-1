import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FirstService } from './first-service';
import 'rxjs/add/operator/map';

/*
  Generated class for the SecondService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SecondService {

  firstSvc:FirstService;
  constructor(public http: Http, firstSvc:FirstService) {
    this.firstSvc = firstSvc;
  }

  getSecondIP(){
    return this.firstSvc.getFirstIP();
  }

  getSecondPORT(){
    return this.firstSvc.getFirstPORT();
  }

}

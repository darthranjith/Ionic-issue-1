import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FirstService } from '../../providers/first-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[FirstService]
})
export class HomePage {

  homeip:string;
  homeport:string;
  constructor(public navCtrl: NavController, public firstService:FirstService) {
    this.homeip = firstService.ip;
    this.homeport = firstService.port;
  }

}

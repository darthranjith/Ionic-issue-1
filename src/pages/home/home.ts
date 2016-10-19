import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SecondService } from '../../providers/second-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[]
})
export class HomePage {
homeip:string;
homeport:string;
  constructor(public navCtrl: NavController, secondSvc:SecondService) {
    this.homeip = secondSvc.getSecondIP();
    this.homeport = secondSvc.getSecondPORT();
  }

}

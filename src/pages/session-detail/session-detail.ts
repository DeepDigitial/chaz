import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import {ZillowGetService} from "../../modules/zillow-service/zillow-get.service";


@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;

  constructor(public navParams: NavParams, private _zillowGet:ZillowGetService) {
    this.session = navParams.data.session;
    _zillowGet.getFromAddress( 'Huntsville, AL', '2612 Clifton Dr.' )
      .subscribe(
        answers => console.log(JSON.stringify(answers)),
        error =>  console.log(error));
  }
}

import { Component, ViewChild } from "@angular/core";
import {Nav, NavController} from 'ionic-angular';
import { WaitingForConsumersPage } from '../waiting-for-consumers-page/waiting-for-consumers.page';

@Component({
    selector:'geo-definition-page',
    templateUrl:'geo-definition.page.html'
})

export class GeoDefinitionPage {

    constructor(public navCtrl: NavController){}

    setActiveBounds(){
        this.navCtrl.setRoot(WaitingForConsumersPage);
    }


}
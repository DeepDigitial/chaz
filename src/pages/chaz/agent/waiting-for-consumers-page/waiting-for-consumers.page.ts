import {Component} from "@angular/core";
import {AlertController, List, NavController} from "ionic-angular";
import {Buyer} from "../../models/buyer.model";
import {AppointmentRequest} from "../../models/appointment-request.model";

@Component({
    selector:'waiting-for-consumers-page',
    templateUrl:'waiting-for-consumers.page.html'
})
export class WaitingForConsumersPage {

    appointmentRequests: AppointmentRequest[];
    numApptsToAdd: number = 5;

    reqAddInterval:any;

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController){

        this.reqAddInterval = setInterval(this.addAppointmentRequest,2000);
    }

    // TESTING FUNCTION - REMOVE ASAP
    addAppointmentRequest(){

        if(this.numApptsToAdd < this.numApptsToAdd){
            let request = new AppointmentRequest();
            this.appointmentRequests.push(request);
        }else{
            clearInterval(this.reqAddInterval);
        }

    }

    clockOut(){
        console.log("User wants to clock out.");

        let alert = this.alertCtrl.create({
            title:'Confirm Clocking Out',
            message:'Are you sure you want to clock out?',
            buttons:[
                {
                    text:'Cancel',
                    role:'cancel',
                    handler:() => {
                        console.log("User wants to cancel clocking out.");
                    }
                },
                {
                    text:'Clock Out',
                    handler:() => {
                        console.log("User wants to clock out.");
                    }
                }
            ]
        });
        alert.present({});
    }

}
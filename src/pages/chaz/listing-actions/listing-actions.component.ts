import {Component, Input} from "@angular/core";
import {Listing} from "../models/listing.model";

@Component({
    selector:'listing-actions',
    templateUrl:'listing-actions.html'
})
export class ListingActions {
    @Input() listing: Listing;

    onShowPropertySelected(){
        console.log("Show Property Selected...");

        // if the user is not an agent, then ask them to sign up
        // as an agent.

    }

    onScheduleShowingSelected(){
        console.log("Schedule Showing Selected...");

    }



}
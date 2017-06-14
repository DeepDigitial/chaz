import {Component, Input} from "@angular/core";
import {Listing} from "../models/listing";
import {NavController} from "ionic-angular";
import {ListingDetailPage} from "../listing-detail/listing-detail";

@Component({
    selector: 'listing-list-item',
    templateUrl: 'listing-list-item.html'
})

export class ListingListItem {

    @Input() listing: Listing;


    constructor(public navCtrl: NavController) {

    }

    goToListingDetail(selectedListing:Listing){

        this.navCtrl.push(ListingDetailPage, {
            listing:selectedListing
        });
    }

}

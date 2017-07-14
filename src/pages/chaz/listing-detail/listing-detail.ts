import {Component} from "@angular/core";
import {Listing} from "../models/listing.model";
import {NavParams} from "ionic-angular";

@Component({
    selector:'listing-detail',
    templateUrl:'listing-detail.html'
})

export class ListingDetailPage {

    listing: Listing;

    constructor(public navParams: NavParams){
        this.listing = navParams.data.listing;
    }

}
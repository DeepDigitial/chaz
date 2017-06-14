

import {Component, Input} from "@angular/core";
import {Listing} from "../models/listing";
@Component({
    selector:"listing-address",
    templateUrl:"listing-address.html"
})

export class ListingAddress {
    @Input() listing: Listing;


}
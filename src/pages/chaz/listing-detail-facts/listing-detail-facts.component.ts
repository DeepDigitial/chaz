import {Listing} from "../models/listing.model";
import {Component, Input} from "@angular/core";

@Component({
    selector:"listing-detail-facts",
    templateUrl:"listing-detail-facts.html"
})

export class ListingDetailFacts {
    @Input() listing:Listing;
}
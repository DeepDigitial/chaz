import {Listing} from "../models/listing";
import {Component, Input} from "@angular/core";

@Component({
    selector:"listing-detail-facts",
    templateUrl:"listing-detail-facts.html"
})

export class ListingDetailFacts {
    @Input() listing:Listing;
}
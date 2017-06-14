import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';

import { Platform } from 'ionic-angular';

import { Listing } from '../models/listing';
import { ListingProvider } from '../../../providers/listing-provider';

@Component({
  selector: 'page-listing-search',
  templateUrl: 'listing-search.html'
})

export class ListingSearchPage implements OnInit{
  displayedListings:Listing[] = new Array<Listing>();
  displayingList:boolean = true;

  @ViewChild('listing') listingEle: ElementRef;

  constructor(public platform: Platform,public listingProvider:ListingProvider) {

  }

  ngOnInit(){

  }

  ionViewDidLoad() {
    this.getListings();
  }

  // Triggered on each user event when they type
  // something in the search field.
  onSearchTextChanged(ev:any){
    console.log("Search Value:" + ev.target.value);
  }

  getListings(){
    this.listingProvider.load().subscribe((data:any) => {
        this.displayedListings = data.json().listings;
    });
  }

  onListSelected(){ this.displayingList = true; }
  onMapSelected() { this.displayingList = false; }

}

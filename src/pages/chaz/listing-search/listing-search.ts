import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';

import {NavController, Platform, PopoverController} from 'ionic-angular';

import { Listing } from '../models/listing';
import { ListingProvider } from '../../../providers/listing-provider';

import { ListingSearchFilterPage } from '../listing-search-filter-page/listing-search-filter-page.component';

@Component({
  selector: 'page-listing-search',
  templateUrl: 'listing-search.html'
})

export class ListingSearchPage implements OnInit{
  displayedListings:Listing[] = new Array<Listing>();
  displayingList:boolean = true;

  @ViewChild('listing') listingEle: ElementRef;

  constructor(public platform: Platform,
              public listingProvider:ListingProvider,
              public navController:NavController,
              public popoverController:PopoverController) {

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

  onFilterSelected(){
    let popover = this.popoverController.create(ListingSearchFilterPage);
    popover.present();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { ListingSearchPage } from '../pages/chaz/listing-search/listing-search';
import { ListingProvider } from '../providers/listing-provider';
import { ListingListItem } from '../pages/chaz/listing-list-item/listing-list-item';
import { ListingDetailPage } from "../pages/chaz/listing-detail/listing-detail";
import { ListingDetailFacts } from "../pages/chaz/listing-detail-facts/listing-detail-facts.component";
import { ListingAddress } from "../pages/chaz/listing-address/listing-address.component";
import { ListingMap } from "../pages/chaz/listing-map/listing-map";
import { ListingSearchFilterPage } from "../pages/chaz/listing-search-filter-page/listing-search-filter-page.component";
import { ListingActions } from "../pages/chaz/listing-actions/listing-actions.component";
import {Accordion} from "../pages/chaz/accordion/accordion.component";
import {AccordionItem} from "../pages/chaz/accordion/accordion-item.component";
import {AccordionGroup} from "../pages/chaz/accordion/accordion-group.component";
import {GeoDefinitionPage} from "../pages/chaz/agent/geoDefinitionPage/geo-definition.page";
import {WaitingForConsumersPage} from "../pages/chaz/agent/waiting-for-consumers-page/waiting-for-consumers.page";
import {BuyerListItem} from "../pages/chaz/buyer/buyer-list-item/buyer-list-item.component";


import { ConferenceData } from '../providers/conference-data';
import {ZillowServiceModule} from "../modules/zillow-service/zillow-service.module";

@NgModule({
  declarations: [
    ConferenceApp,
    ListingMap,
    ListingSearchPage,
    ListingListItem,
    ListingDetailPage,
    ListingDetailFacts,
    ListingAddress,
    ListingSearchFilterPage,
    ListingActions,
    Accordion,
    AccordionItem,
    AccordionGroup,
    GeoDefinitionPage,
    WaitingForConsumersPage,
    BuyerListItem
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ZillowServiceModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: ListingSearchPage,name: 'ListingSearchPage', segment:'listingSearch'}
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ListingSearchPage,
    ListingDetailPage,
    ListingSearchFilterPage,
    GeoDefinitionPage,
    WaitingForConsumersPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    SplashScreen,
    ListingProvider
  ]
})
export class AppModule { }

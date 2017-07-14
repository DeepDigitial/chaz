import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

// import { AboutPage } from '../pages/about/about';
// import { AccountPage } from '../pages/account/account';
// import { LoginPage } from '../pages/login/login';
// import { MapPage } from '../pages/map/map';
// import { SignupPage } from '../pages/signup/signup';
// import { TabsPage } from '../pages/tabs/tabs';
// import { TutorialPage } from '../pages/tutorial/tutorial';
// import { SchedulePage } from '../pages/schedule/schedule';
// import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
// import { SupportPage } from '../pages/support/support';
import { ListingSearchPage } from '../pages/chaz/listing-search/listing-search';
import {GeoDefinitionPage} from "../pages/chaz/agent/geoDefinitionPage/geo-definition.page";

// import { UserData } from '../providers/user-data';
import { ListingProvider } from '../providers/listing-provider';
import {TabsPage} from "../pages/tabs/tabs";

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  agentMode:boolean = false;
  isAgentClockedIn:boolean = false;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    // { title: 'Schedule', name: 'TabsPage', component: TabsPage, tabComponent: SchedulePage, index: 0, icon: 'calendar' },
    // { title: 'Speakers', name: 'TabsPage', component: TabsPage, tabComponent: SpeakerListPage, index: 1, icon: 'contacts' },
    // { title: 'Map', name: 'TabsPage', component: TabsPage, tabComponent: MapPage, index: 2, icon: 'map' },
    // { title: 'About', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 3, icon: 'information-circle' } ,
    { title: 'Listings', name: 'ListingSearchPage', component: ListingSearchPage, icon: 'map'}
  ];

  buyerPages: PageInterface[] = [

  ];

  agentPages: PageInterface[] = [

  ];

  loggedInPages: PageInterface[] = [
    // { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    // { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    // { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true },
    // { title: 'Listings', name: 'ListingSearchPage', component: ListingSearchPage, icon: 'map'}
  ];
  loggedOutPages: PageInterface[] = [
    // { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    // { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    // { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen,
    public listingData: ListingProvider
  ) {

    // Check if the user has already seen the tutorial
    // this.storage.get('hasSeenTutorial')
    //   .then((hasSeenTutorial) => {
    //     if (hasSeenTutorial) {
    //       this.rootPage = TabsPage;
    //     } else {
    //       this.rootPage = TutorialPage;
    //     }
    //
    //   });

    this.rootPage = ListingSearchPage;
    //this.nav.setRoot(this.rootPage);

    this.platformReady()
    // load the conference data
    listingData.load();

    // decide which menu items should be hidden by current login status stored in local storage
    // this.userData.hasLoggedIn().then((hasLoggedIn) => {
    //   this.enableMenu(hasLoggedIn === true);
    // });
    // this.enableMenu(true);

    //this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    // Set the root of the nav with params if it's a tab index
    } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    // if (page.logsOut === true) {
    //   // Give the menu time to close before changing to logged out
    //   //this.userData.logout();
    // }
  }

  // openTutorial() {
  //   // this.nav.setRoot(TutorialPage);
  // }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

  setAgentMode() {
    console.log("Agent Mode has been activated.");
    this.agentMode = true;

  }

  setUserMode(){
    console.log("User Mode has been activated.");
    this.agentMode = false;
  }

  toggleAgentClockedIn(){
    this.isAgentClockedIn = !this.isAgentClockedIn;

    if(this.isAgentClockedIn){
      this.clockAgentIn();
    }else{
      this.clockAgentOut();
    }

  }

  clockAgentIn(){
    console.log("Agent has been clocked in.");

    this.nav.setRoot(GeoDefinitionPage,{});
  }

  clockAgentOut(){
    console.log("Agent has been clocked out.");
    this.nav.setRoot(ListingSearchPage,{});
  }
}

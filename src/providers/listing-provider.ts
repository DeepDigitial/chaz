import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ListingProvider {
    data: any;

    constructor(public http: Http) { }

    load(): any {
        if (this.data) {
            return Observable.of(this.data);
        } else {
            return this.http.get('assets/data/listings.json');
        }
    }

}
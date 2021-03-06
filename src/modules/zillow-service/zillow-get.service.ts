import { Injectable } from '@angular/core';
import {Http, Response, Jsonp} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ZillowGetService {

  //zillowURL = 'http://www.zillow.com/webservice/GetSearchResults.htm';
  zillowURL = 'http://localhost:1557/address';
  zwsID = '1212343';
  constructor( private _http: Http, private _jsonp: Jsonp ) {}

  // citystate: string, address: string
   getFromAddress( citystate: string, address: string ): Observable<any> {
    let the_url = '';
    the_url =  `${this.zillowURL}?zws-id=${this.zwsID}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`;
     return this._http.request(the_url)
       .map(this.extractData)
       .catch(this.handleError);
   }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

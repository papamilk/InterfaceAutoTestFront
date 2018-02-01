import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RURL_LIST, RURL_ONE } from "../urls";
import { RURL } from "./rurl";

@Injectable()
export class RURLService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	
  constructor(private http: Http) { }

  getRURLs(): Promise<RURL[]> {
    return this.http
	  .post(RURL_LIST, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json() as RURL[])
	  .catch(this.handleError);
  }
  getRURL(id: number): Promise<RURL> {
    let params = 'truId=' + id;
	  return this.http
	    .post(RURL_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json() as RURL)
	    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
  }
}
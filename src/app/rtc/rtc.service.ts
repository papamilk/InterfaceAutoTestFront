import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RTC_LIST, RTC_ONE } from "../urls";
import { RTC } from "./rtc";

@Injectable()
export class RTCService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	
  constructor(private http: Http) { }

  getRTCs(): Promise<RTC[]> {
    return this.http
	  .post(RTC_LIST, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json() as RTC[])
	  .catch(this.handleError);
  }
  getRTC(id: number): Promise<RTC> {
    let params = 'trtcId=' + id;
	  return this.http
	    .post(RTC_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json() as RTC)
	    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
  }
}
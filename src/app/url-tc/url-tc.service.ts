import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { URLTC_LIST, URLTC_ONE, URLTC_ADD, URLTC_UPDATE } from "../urls";
import { UrlTc } from "./url-tc";

@Injectable()
export class UrlTcService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  getUrlTcs(): Promise<UrlTc[]> {
  	return this.http
	    .post(URLTC_LIST, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data.Rows as UrlTc[])
	    .catch(this.handleError);
  }
  getUrlTc(id: number): Promise<UrlTc> {
	  let params = 'iutcId=' + id;
	  return this.http
	    .post(URLTC_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as UrlTc)
	    .catch(this.handleError);
  }
  updateUrlTc(urlTc: UrlTc): Promise<boolean> {
  	let params = 'iutcId=' + urlTc.iutcId + '&mumId=' + urlTc.mumId
  		+ '&mtcId=' + urlTc.mtcId;
  	return this.http
	    .post(URLTC_UPDATE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  addUrlTc(urlTc: UrlTc): Promise<boolean> {
  	let params = 'mumId=' + urlTc.mumId + '&mtcId=' + urlTc.mtcId;
  	return this.http
	    .post(URLTC_ADD, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }
}

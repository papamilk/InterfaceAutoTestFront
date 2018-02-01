import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Sub } from "./sub";
import { SUBS } from "./mock-subs";
import { SUB_LIST, SUB_ONE, SUB_ADD, SUB_UPDATE, SUB_BY_IEMID, SUB_CHECK_NAME } from "../urls";

@Injectable()
export class SubService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	
  constructor(private http: Http) { }
	
  getSubs(): Promise<Sub[]> {
    return this.http
	  .post(SUB_LIST, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json() as Sub[])
	  .catch(this.handleError);
  }
  getSubsByIemId(iemId: number): Promise<Sub[]> {
  	let params = 'iemdId=' + iemId;
    return this.http
	  .post(SUB_BY_IEMID, params, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json() as Sub[])
	  .catch(this.handleError);
  }
  getSub(id: number): Promise<Sub> {
		let params = 'iemsId=' + id;
	return this.http
	  .post(SUB_ONE, params, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json() as Sub)
	  .catch(this.handleError);
  }
  updateSub(sub: Sub): Promise<boolean> {
  	let params = 'iemsId=' + sub.iemsId + '&iemId=' + sub.iemId;
  	return this.http
	  .post(SUB_UPDATE, params, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json().resultType as boolean)
	  .catch(this.handleError);
  }
  addSub(sub: Sub): Promise<boolean> {
  	let params = 'iemId=' + sub.iemId;
  	return this.http
	  .post(SUB_ADD, params, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json().resultType as boolean)
	  .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
  }
}
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SubTc } from "./sub-tc";
import { SUBTC_LIST, SUBTC_ONE, SUBTC_ADD, SUBTC_UPDATE } from "../urls";

@Injectable()
export class SubTcService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	
  constructor(private http: Http) { }
	
  getSubTcs(): Promise<SubTc[]> {
    return this.http
	    .post(SUBTC_LIST, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json() as SubTc[])
	    .catch(this.handleError);
  }
  getSubTc(id: number): Promise<SubTc> {
	let params = 'ietcId=' + id;
	  return this.http
	    .post(SUBTC_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json() as SubTc)
	    .catch(this.handleError);
  }
  updateSubTc(subTc: SubTc): Promise<boolean> {
  	let params = 'ietcId=' + subTc.ietcId + '&iemsId=' + subTc.iemsId 
  		+ '&mtcId=' + subTc.mtcId;
  	return this.http
	    .post(SUBTC_UPDATE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }
  
  addSubTc(subTc: SubTc): Promise<boolean> {
  	let params = 'iemsId=' + subTc.iemsId + '&mtcId=' + subTc.mtcId;
  	return this.http
	    .post(SUBTC_ADD, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }
}
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RS_LIST, RS_ONE } from "../urls";
import { RS } from "./rs";

@Injectable()
export class RSService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	
  constructor(private http: Http) { }

  getRSs(): Promise<RS[]> {
    return this.http
	  .post(RS_LIST, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json() as RS[])
	  .catch(this.handleError);
  }
  getRS(id: number): Promise<RS> {
    let params = 'trsId=' + id;
	  return this.http
	    .post(RS_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json() as RS)
	    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
  }
}
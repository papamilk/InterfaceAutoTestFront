import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RTD_LIST, RTD_ONE } from "../urls";
import { RTD } from "./rtd";

@Injectable()
export class RTDService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	
  constructor(private http: Http) { }

  getRTDs(): Promise<RTD[]> {
    return this.http
	  .post(RTD_LIST, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json() as RTD[])
	  .catch(this.handleError);
  }
  getRTD(id: number): Promise<RTD> {
    let params = 'trtdId=' + id;
	  return this.http
	    .post(RTD_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json() as RTD)
	    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
  }
}
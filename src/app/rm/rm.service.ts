import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RM_LIST, RM_ONE } from "../urls";
import { RM } from "./rm";

@Injectable()
export class RMService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	
  constructor(private http: Http) { }

  getRMs(): Promise<RM[]> {
    return this.http
	  .post(RM_LIST, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json() as RM[])
	  .catch(this.handleError);
  }
  getRM(id: number): Promise<RM> {
    let params = 'trmId=' + id;
	  return this.http
	    .post(RM_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json() as RM)
	    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
  }
}
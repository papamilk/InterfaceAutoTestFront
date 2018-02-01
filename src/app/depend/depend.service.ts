import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DEPEND_LIST, DEPEND_ONE, DEPEND_ADD, DEPEND_UPDATE } from "../urls";
import { Depend } from "./depend";

@Injectable()
export class DependService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  getDepends(): Promise<Depend[]> {
    return this.http
	  .post(DEPEND_LIST, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json().data.Rows as Depend[])
	  .catch(this.handleError);
  }
  getDepend(id: number): Promise<Depend> {
    let params = 'itddId=' + id;
	  return this.http
	    .post(DEPEND_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Depend)
	    .catch(this.handleError);
  }
  updateDepend(depend: Depend): Promise<boolean> {
  	let params = 'itddId=' + depend.itddId + '&itdId=' + depend.itdId
  		+ '&itddDependency=' + depend.itddDependency + '&itddType=' + depend.itddType;
  	return this.http
	    .post(DEPEND_UPDATE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }
  addDepend(depend: Depend): Promise<boolean> {
  	let params = 'itdId=' + depend.itdId
  		+ '&itddDependency=' + depend.itddDependency + '&itddType=' + depend.itddType;
  	return this.http
	    .post(DEPEND_ADD, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
  }
}

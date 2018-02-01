import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TC_LIST, TC_ONE, TC_ADD, TC_UPDATE, TC_BY_MPID, TC_CHECK_NAME } from "../urls";
import { Tc } from "./tc";
import { TCS } from "./mock-tcs";

@Injectable()
export class TcService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  getTcs(): Promise<Tc[]> {
  	return this.http
	    .post(TC_LIST, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data.Rows as Tc[])
	    .catch(this.handleError);
  }
  getTcsByMpId(mpId: number): Promise<Tc[]> {
  	let params = 'mpId=' + mpId;
  	return this.http
	    .post(TC_BY_MPID, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data.Rows as Tc[])
	    .catch(this.handleError);
  }
  getTc(id: number): Promise<Tc> {
    let params = 'mtcId=' + id;
    return this.http
      .post(TC_ONE, params, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Tc)
      .catch(this.handleError);
  }
  updateTc(tc: Tc): Promise<boolean> {
  	let params = 'mtcId=' + tc.mtcId + '&mtcName=' + tc.mtcName
  		+ '&mtcType=' + tc.mtcType;
  	return this.http
	    .post(TC_UPDATE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  addTc(tc: Tc): Promise<boolean> {
  	let params = 'mtcName=' + tc.mtcName + '&mtcType=' + tc.mtcType;
  	return this.http
	    .post(TC_ADD, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  validateName(name: string): Promise<boolean> {
		// 发送请求到服务端验证
		let params = 'mtcName=' + name;
		return this.http
		  .post(TC_CHECK_NAME, params, {headers: this.headers})
			.toPromise()
			.then(res => res.json().data.valid as boolean)
			.catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }
}

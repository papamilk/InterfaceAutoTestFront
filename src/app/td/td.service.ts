import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TD_LIST, TD_ONE, TD_ADD, TD_UPDATE, TD_CHECK_NAME, TD_LIST_BY_MTCID } from "../urls";
import { Td } from "./td";

@Injectable()
export class TdService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  getTds(): Promise<Td[]> {
  	return this.http
	    .post(TD_LIST, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data.Rows as Td[])
	    .catch(this.handleError);
  }

  getIdsByMtcId(mtcId: number): Promise<Td[]> {
    let params = 'mtcId=' + mtcId;
    return this.http
      .post(TD_LIST_BY_MTCID, params, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data.Rows as Td[])
      .catch(this.handleError);
  }

  getTd(id: number): Promise<Td> {
    let params = 'itdId=' + id;
	  return this.http
	    .post(TD_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Td)
	    .catch(this.handleError);
  }
  updateTd(td: Td): Promise<boolean> {
  	let params = 'itdId=' + td.itdId + '&mumId=' + td.mumId
  		+ '&itdName=' + td.itdName + '&itdCols=' + td.itdCols
  		+ '&itdValues=' + td.itdValues + '&itdParamTypes=' + td.itdParamTypes
  		+ '&itdType=' + td.itdType + '&itdExpectTime=' + td.itdExpectTime
  		+ '&itdExpectResult=' + td.itdExpectResult
  		+ '&itdExpectResultType=' + td.itdExpectResultType;
  	return this.http
	    .post(TD_UPDATE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  addTd(td: Td): Promise<boolean> {
  	let params = 'mumId=' + td.mumId
  		+ '&itdName=' + td.itdName + '&itdCols=' + td.itdCols
  		+ '&itdValues=' + td.itdValues + '&itdParamTypes=' + td.itdParamTypes
  		+ '&itdType=' + td.itdType + '&itdExpectTime=' + td.itdExpectTime
  		+ '&itdExpectResult=' + td.itdExpectResult
  		+ '&itdExpectResultType=' + td.itdExpectResultType;
  	return this.http
	    .post(TD_ADD, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  validateName(name: string): Promise<boolean> {
		// 发送请求到服务端验证
		let params = 'itdName=' + name;
		return this.http
		  .post(TD_CHECK_NAME, params, {headers: this.headers})
			.toPromise()
			.then(res => res.json().data.valid as boolean)
			.catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }
}

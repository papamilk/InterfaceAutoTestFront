import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MAIN_LIST, MAIN_ONE, MAIN_ADD, MAIN_UPDATE, MAIN_CHECK_NAME } from "../urls";
import { Main } from "./main";

@Injectable()
export class MainService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  getMains(): Promise<Main[]> {
    return this.http
	  .post(MAIN_LIST, {headers: this.headers})
	  .toPromise()
	  .then(res => res.json().data.Rows as Main[])
	  .catch(this.handleError);
  }
  getMain(id: number): Promise<Main> {
    let params = 'iemId=' + id;
	  return this.http
	    .post(MAIN_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Main)
	    .catch(this.handleError);
  }
  updateMain(main: Main): Promise<boolean> {
  	let params = 'iemId=' + main.iemId + '&mpId=' + main.mpId
  		+ '&iemName=' + main.iemName;
  	return this.http
	    .post(MAIN_UPDATE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }
  addMain(main: Main): Promise<boolean> {
  	let params = 'mpId=' + main.mpId
  		+ '&iemName=' + main.iemName;
  	return this.http
	    .post(MAIN_ADD, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }
  validateName(name: string): Promise<boolean> {
		// 发送请求到服务端验证
		let params = 'iemName=' + name;
		return this.http
		  .post(MAIN_CHECK_NAME, params, {headers: this.headers})
			.toPromise()
			.then(res => res.json().data.valid as boolean)
			.catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
  }
}

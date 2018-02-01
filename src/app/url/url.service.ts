import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { URL_LIST, URL_ONE, URL_ADD, URL_UPDATE, URL_CHECK_NAME } from "../urls";
import { Url } from "./url";

@Injectable()
export class UrlService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  getUrls(): Promise<Url[]> {
  	return this.http
	    .post(URL_LIST, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data.Rows as Url[])
	    .catch(this.handleError);
  }
  getUrl(id: number): Promise<Url> {
	  let params = 'mumId=' + id;
	  return this.http
	    .post(URL_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Url)
	    .catch(this.handleError);
  }
  updateUrl(url: Url): Promise<boolean> {
  	let params = 'mumId=' + url.mumId + '&mumName=' + url.mumName
  		+ '&mumUrlPath=' + url.mumUrlPath + '&mumMethodType=' + url.mumMethodType;
  	return this.http
	    .post(URL_UPDATE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  addUrl(url: Url): Promise<boolean> {
  	let params = 'mumName=' + url.mumName
  		+ '&mumUrlPath=' + url.mumUrlPath + '&mumMethodType=' + url.mumMethodType;
  	return this.http
	    .post(URL_ADD, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  validateName(name: string): Promise<boolean> {
		// 发送请求到服务端验证
		let params = 'mumName=' + name;
		return this.http
		  .post(URL_CHECK_NAME, params, {headers: this.headers})
			.toPromise()
			.then(res => res.json().data.valid as boolean)
			.catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }
}

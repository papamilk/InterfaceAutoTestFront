import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DB_INIT } from "../urls";

@Injectable()
export class DatabaseInitService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  init(dbName: string): Promise<Response> {
    let params = 'dataBaseName=' + dbName;
    return this.http
      .post(DB_INIT, params, {headers: this.headers})
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
}

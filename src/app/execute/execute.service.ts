import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { EXECUTE_TEST, TOTAL_TESTDATA_COUNT, EXECUTED_TESTDATA_COUNT } from "../urls";

@Injectable()
export class ExecuteService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  execute(iemId: number): Promise<boolean> {
  	let params = 'iemId=' + iemId;
  	return this.http
	    .post(EXECUTE_TEST, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  findTotalTestDataCount(iemId: number): Promise<number> {
    let url = TOTAL_TESTDATA_COUNT + "?iemId=" + iemId;
    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as number)
      .catch(this.handleError);
  }

  findExecutedTestDataCount(iemId: number): Promise<number> {
    let url = EXECUTED_TESTDATA_COUNT + "?iemId=" + iemId;
    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as number)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}

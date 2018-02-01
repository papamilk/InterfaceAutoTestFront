import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { EXCEL_DOWNLOAD, EXCEL_PARSE, VALIDATE_EXPECT_RESULT } from "../urls";

@Injectable()
export class ExcelService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  excel(iemId: number): Promise<boolean> {
	let url = `${EXCEL_DOWNLOAD}` + '?' + 'iemId=' + iemId;
	return this.http
	    .get(url, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  parseDataFile(): Promise<any> {
    let url = `${EXCEL_PARSE}`;
    return this.http
      .post(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  validateExpectResult(expectResult: string): Promise<string> {
    let params = 'expectResult=' + expectResult;
    return this.http
      .post(VALIDATE_EXPECT_RESULT, params, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}

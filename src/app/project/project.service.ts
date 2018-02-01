import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FormControl } from '@angular/forms';

import { PROJECT_LIST, PROJECT_ONE, PROJECT_ADD, PROJECT_UPDATE, PROJECT_CHECK_NAME } from "../urls";
import { Project } from "./project";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {
  private headers: Headers;

  constructor(private http: Http) {
  	this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  }

  getProjects(): Promise<Project[]> {
  	return this.http
	    .post(PROJECT_LIST, null, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data.Rows as Project[])
	    .catch(this.handleError);
  }

  getProject(id: number): Promise<Project> {
  	let params = 'mpId=' + id;
	  return this.http
	    .post(PROJECT_ONE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Project)
	    .catch(this.handleError);
	}

  updateProject(project: Project): Promise<boolean> {
  	let params = 'mpId=' + project.mpId + '&mpName=' + project.mpName
  		+ '&mpDescription=' + project.mpDescription + '&mpUrlPrefixion=' + project.mpUrlPrefixion;
  	return this.http
	    .post(PROJECT_UPDATE, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  addProject(project: Project): Promise<boolean> {
  	let params = 'mpName=' + project.mpName
  		+ '&mpDescription=' + project.mpDescription + '&mpUrlPrefixion=' + project.mpUrlPrefixion;
  	return this.http
	    .post(PROJECT_ADD, params, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().resultType as boolean)
	    .catch(this.handleError);
  }

  validateName(name: string): Promise<boolean> {
		// 发送请求到服务端验证
		let params = 'mpName=' + name;
		return this.http
		  .post(PROJECT_CHECK_NAME, params, {headers: this.headers})
			.toPromise()
			.then(res => res.json().data.valid as boolean)
			.catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}

import {
   async, inject, TestBed
} from '@angular/core/testing';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {
  HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Project } from "./project";
import { ProjectService } from './project.service';

const makeProjectData = () => [
  { mpId: 11, mpName: 'Skylot', mpDescription: 'Skylot接口自动化测试', mpUrlPrefixion: 'http://localhost:8080/' },
  { mpId: 12, mpName: 'Skylot', mpDescription: 'Skylot接口自动化测试', mpUrlPrefixion: 'http://localhost:8080/' },
  { mpId: 13, mpName: 'Skylot', mpDescription: 'Skylot接口自动化测试', mpUrlPrefixion: 'http://localhost:8080/' },
  { mpId: 14, mpName: 'Skylot', mpDescription: 'Skylot接口自动化测试', mpUrlPrefixion: 'http://localhost:8080/' }
] as Project[];

describe('ProjectService (mockBackend)', () => {
	beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        ProjectService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));
  
  it('can instantiate service when inject service',
    inject([ProjectService], (service: ProjectService) => {
      expect(service instanceof ProjectService).toBe(true);
  }));
  
  it('can instantiate service with "new"', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http should be provided');
    let service = new ProjectService(http);
    expect(service instanceof ProjectService).toBe(true, 'new service should be ok');
  }));
  
  it('can provide the mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
  }));
  
  describe('when getProjects', () => {
  	let backend: MockBackend;
	  let service: ProjectService;
	  let fakeProjects: Project[];
	  let response: Response;
	  
	  beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
	    backend = be;
	    service = new ProjectService(http);
	    fakeProjects = makeProjectData();
	    let options = new ResponseOptions({status: 200, body: fakeProjects});
	    response = new Response(options);
	  }));
	  
	  it('should have expected fake projects (then)', async(inject([], () => {
	    backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
	    service.getProjects()
	      .then(projects => {
	        expect(projects.length).toBe(fakeProjects.length,
	          'should have expected no. of projects');
	      });
	  })));
	  
	  it('should be OK returning no projects', async(inject([], () => {
	    let resp = new Response(new ResponseOptions({status: 200, body: []}));
	    backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));
	
	    service.getProjects()
	      .then(projects => {
	        expect(projects.length).toBe(0, 'should have no projects');
	      });
	  })));
  });
});
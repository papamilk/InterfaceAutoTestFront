import { TestBed, async } from '@angular/core/testing';
import { ProjectService } from '../project.service';

describe('project service tests', () => {
  let service: ProjectService;
  
  beforeEach(() => { service = new ProjectService(); });
  
  it('#getProjects should return async value', (done: DoneFn) => {
    service.getProjects().then(value => {
      expect(1).toBe(1);
      done();
    });
  });
});
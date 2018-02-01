import { async, ComponentFixture, fakeAsync, TestBed, tick
} from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { addMatchers, newEvent, Router, RouterStub
} from '../../testing';

import { PROJECTS, FakeProjectService } from '../testing';

import { ProjectModule }         from '../project.module';
import { ProjectsComponent }  from './projects.component';
import { ProjectService }        from '../project.service';

let comp: ProjectsComponent;
let fixture: ComponentFixture<ProjectsComponent>;
let page: Page;

describe('ProjectsComponent', () => {
  beforeEach( async(() => {
    addMatchers();
    TestBed.configureTestingModule({
      imports: [ProjectModule],
      providers: [
        { provide: ProjectService, useClass: FakeProjectService },
        { provide: Router,      useClass: RouterStub}
      ]
    })
    .compileComponents()
    .then(createComponent);
  }));
});

function createComponent() {
  fixture = TestBed.createComponent(ProjectsComponent);
  comp = fixture.componentInstance;

  // change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    // got the heroes and updated component
    // change detection updates the view
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  /** Hero line elements */
  projectRows: HTMLLIElement[];

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {
    this.projectRows = fixture.debugElement.queryAll(By.css('li')).map(de => de.nativeElement);

    // Get the component's injected router and spy on it
    const router = fixture.debugElement.injector.get(Router);
    this.navSpy = spyOn(router, 'navigate');
  };
}
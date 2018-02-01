import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { Project } from "../project";
import { ProjectService } from '../project.service';

@Component({
  selector: 'projects',
  templateUrl: '../view/projects.component.html'
})

export class ProjectsComponent implements OnInit {
	projects: Project[];
	selectedProject: Project;
	
	constructor(
		private projectService: ProjectService,
		private router: Router
	) { }
	
	getProjects(): void {
		this.projectService.getProjects().then(projects => this.projects = projects);
	}
	
	ngOnInit(): void {
	  this.getProjects();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/project/detail/', event.data.mpId]);
	}
}
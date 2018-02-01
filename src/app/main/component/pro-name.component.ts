import { Component, OnInit, DoCheck } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { Project } from "../../project/project";
import { ProjectService } from '../../project/project.service';

@Component({
  selector: 'pro-name',
  templateUrl: '../view/pro-name.component.html'
})

export class ProNameComponent implements OnInit, DoCheck {
	projects: Project[];
	names: SelectItem[];
	selectedID: number;
	flag = true;
  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
  	this.projectService.getProjects().then(projects => this.projects = projects);
  }
  
  ngDoCheck(): void {
  	if (this.flag&&!(typeof(this.projects)=="undefined")) {
  		this.flag = false;
  		this.names = [];
	  	for (let i = 0; i < this.projects.length; i++) {
	  		this.names.push({label:this.projects[i].mpName, value:this.projects[i].mpId});
	  	}
  	}
	}
}
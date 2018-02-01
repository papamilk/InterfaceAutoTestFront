import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Project } from '../project';
import { ProjectService } from '../project.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'project-detail',
  templateUrl: '../view/project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
	@Input() project: Project;

	msgs: Message[] = [];

	constructor(
	  private projectService: ProjectService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.projectService.getProject(+params.get('id')))
	    .subscribe(project => this.project = project);
	}
	
	// 更新操作
	onSubmit(value) {
  	this.project.mpName = value.mpName;
  	this.project.mpDescription = value.mpDescription;
  	this.project.mpUrlPrefixion = value.mpUrlPrefixion;
  	
  	this.projectService.updateProject(this.project).then(flag => this.inform(flag));
  }
	
	// 通知信息
	inform(flag: boolean) {
		console.log(flag);
		this.msgs = [];
		if (flag) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'更新成功'});
  	} else {
  		this.msgs.push({severity:'error', summary:'Error', detail:'更新失败'});
  	}
	}
	
	// 返回上一页面
	goBack(): void {
	  this.location.back();
	}
}
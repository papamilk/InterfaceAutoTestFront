import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Project } from '../project';
import { ProjectService } from '../project.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: '../view/project-add.component.html'
})

export class ProjectAddComponent implements OnInit {
	project = new Project();
	msgs: Message[] = [];
	userform: FormGroup;
	recommend: boolean;

  constructor(
	  private projectService: ProjectService,
	  private location: Location,
	  private fb: FormBuilder
  ) {}

  ngOnInit() {
  	this.userform = this.fb.group({
  	  'mpName': new FormControl('', [Validators.required, Validators.maxLength(30)]),
  	  'mpDescription': new FormControl('', Validators.maxLength(30)),
  	  'mpUrlPrefixion': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)]))
  	});
  	let name = this.userform.controls['mpName'];
  	name.valueChanges
  		.debounceTime(500)
  		.distinctUntilChanged()
  		.switchMap(name => this.projectService.validateName(name))
  		.subscribe(recommend => this.recommend = !recommend);
  }

  // 添加操作
  onSubmit(value) {
  	this.project.mpName = value.mpName;
  	if (typeof(value.mpDescription) == 'undefined') {
  		this.project.mpDescription = '';
  	} else {
  		this.project.mpDescription = value.mpDescription;
  	}
  	this.project.mpUrlPrefixion = value.mpUrlPrefixion;
  	this.projectService.addProject(this.project).then(flag => this.inform(flag));
  }

  // 通知信息
	inform(flag: boolean) {
		this.msgs = [];
		if (flag) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'添加成功'});
  	} else {
  		this.msgs.push({severity:'error', summary:'Error', detail:'添加失败'});
  	}
	}
  // 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}

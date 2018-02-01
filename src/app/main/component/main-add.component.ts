import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Main } from '../main';
import { ProNameComponent } from './pro-name.component';
import { MainService } from '../main.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: '../view/main-add.component.html'
})

export class MainAddComponent implements OnInit {
	@ViewChild(ProNameComponent) proName: ProNameComponent;
	main = new Main();
	msgs: Message[] = [];
	userform: FormGroup;
	recommend: boolean;

  constructor(
	  private mainService: MainService,
	  private location: Location,
	  private fb: FormBuilder
  ) {}
  ngOnInit() {
  	this.userform = this.fb.group({
  	  'iemName': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30)]))
  	});
  	let name = this.userform.controls['iemName'];
  	name.valueChanges
  		.debounceTime(500)
  		.distinctUntilChanged()
  		.switchMap(name => this.mainService.validateName(name))
  		.subscribe(recommend => this.recommend = !recommend);
  }
  // 添加操作
  onSubmit(value): void {
  	if (typeof(this.proName.projects) == 'undefined') {
  		this.inform(2); // 表示没有项目相关信息
  		return;
  	}
  	if (typeof(this.proName.selectedID) == 'undefined') {
  		this.inform(3); // 表示没有选择所属项目名称
  		return;
  	}
		this.main.mpId = this.proName.selectedID;
  	if (typeof(value.iemName) == 'undefined') {
  		this.main.iemName = '';
  	} else {
  		this.main.iemName = value.iemName;
  	}
		this.mainService.addMain(this.main).then(flag => this.inform(flag ? 0:1));
  }
  // 通知信息
	inform(flag: number) {
		this.msgs = [];
		if (flag == 0) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'添加成功'});
  	} else if (flag == 1){
  		this.msgs.push({severity:'error', summary:'Error', detail:'添加失败'});
  	} else if (flag == 2) {
  		this.msgs.push({severity:'error', summary:'无项目信息', detail:'请先填写项目信息'});
  	} else if (flag == 3) {
  		this.msgs.push({severity:'error', summary:'没有选择项目名称', detail:'请先选择项目名称'});
  	}
	}
  // 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}

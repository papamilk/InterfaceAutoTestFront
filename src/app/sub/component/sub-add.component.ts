import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Sub } from '../sub';
import { MainNameComponent } from './main-name.component';
import { SubService } from '../sub.service';

@Component({
  templateUrl: '../view/sub-add.component.html'
})

export class SubAddComponent {
	@ViewChild(MainNameComponent) mainName: MainNameComponent;
	sub = new Sub();
	msgs: Message[] = [];
	count: number; // 自动提交的步骤次数
	userform: FormGroup;
	
  constructor(
	  private subService: SubService,
	  private location: Location,
	  private fb: FormBuilder
  ) {}
  ngOnInit() {
  	this.userform = this.fb.group({
  	  'count': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{0,1}$')]) )
  	});
  }
  // 添加操作
  onSubmit(value) {
  	if (typeof(this.mainName.mains) == 'undefined') {
  		this.inform(2); // 表示没有相关信息
  		return;
  	}
  	if (typeof(this.mainName.selectedID) == 'undefined') {
  		this.inform(3); // 表示没有选择名称
  		return;
  	}
  	this.sub.iemId = this.mainName.selectedID;
  	for (let i = 0; i < this.count ; i++) {
  		this.subService.addSub(this.sub).then(flag => this.inform(flag ? 0 : 1));
  	}
  }
  // 通知信息
	inform(flag: number) {
		this.msgs = [];
		if (flag == 0) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'添加成功'});
  	} else if (flag == 1){
  		this.msgs.push({severity:'error', summary:'Error', detail:'添加失败'});
  	} else if (flag == 2) {
  		this.msgs.push({severity:'error', summary:'无场景信息', detail:'请先填写场景信息'});
  	} else if (flag == 3) {
  		this.msgs.push({severity:'error', summary:'没有选择场景名称', detail:'请先选择场景名称'});
  	}
	}
  // 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}
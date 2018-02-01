import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Depend } from '../depend';
import { DependService } from '../depend.service';
import { TdNameComponent } from './td-name.component';

@Component({
  templateUrl: '../view/depend-add.component.html'
})

export class DependAddComponent implements OnInit {
	@ViewChild(TdNameComponent) tdName: TdNameComponent;
	depend = new Depend();
	msgs: Message[] = [];
	userform: FormGroup;
	
  constructor(
	  private dependService: DependService,
	  private location: Location,
	  private fb: FormBuilder
  ) {}
  ngOnInit() {
  	this.userform = this.fb.group({
  	  'itddDependency': new FormControl('', [Validators.required, Validators.maxLength(50)]),
  	  'itddType': new FormControl('', Validators.maxLength(50))
  	});
  }
  // 添加操作
  onSubmit(value) {
  	if (typeof(this.tdName.tds) == 'undefined') {
  		this.inform(2); // 表示没有测试数据相关信息
  		return;
  	}
  	if (typeof(this.tdName.selectedID) == 'undefined') {
  		this.inform(3); // 表示没有选择测试数据
  		return;
  	}
  	this.depend.itdId = this.tdName.selectedID;
  	if (typeof(value.itddDependency) == 'undefined') {
  		this.depend.itddDependency = '';
  	} else {
  		this.depend.itddDependency = value.itddDependency;
  	}
  	if (typeof(value.itddType) == 'undefined') {
  		this.depend.itddType = '';
  	} else {
  		this.depend.itddType = value.itddType;
  	}
  	this.dependService.addDepend(this.depend).then(flag => this.inform(flag ? 0 : 1));
  }
  // 通知信息
	inform(flag: number) {
		this.msgs = [];
		if (flag == 0) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'添加成功'});
  	} else if (flag == 1){
  		this.msgs.push({severity:'error', summary:'Error', detail:'添加失败'});
  	} else if (flag == 2) {
  		this.msgs.push({severity:'error', summary:'无测试数据', detail:'请先添加测试数据'});
  	} else if (flag == 3) {
  		this.msgs.push({severity:'error', summary:'没有选择测试数据', detail:'请先选择测试数据'});
  	}
	}
  // 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}
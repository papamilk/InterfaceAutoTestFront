import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { UrlTc } from '../url-tc';
import { TcNameComponent } from './tc-name.component';
import { UrlNameComponent } from './url-name.component';
import { UrlTcService } from '../url-tc.service';

@Component({
  templateUrl: '../view/url-tc-add.component.html'
})

export class UrlTcAddComponent implements OnInit {
	@ViewChild(TcNameComponent) tcName: TcNameComponent;
	@ViewChild(UrlNameComponent) urlName: UrlNameComponent;
	urlTc = new UrlTc();
	msgs: Message[] = [];
	userform: FormGroup;
	
  constructor(
	  private urlTcService: UrlTcService,
	  private location: Location,
	  private fb: FormBuilder
  ) {}
  ngOnInit() {
  	this.userform = this.fb.group({
  	});
  }
  // 添加操作
  onSubmit(value) {
  	if (typeof(this.tcName.tcs) == 'undefined') {
  		this.inform(2); // 表示没有测试用例相关信息
  		return;
  	}
  	if (typeof(this.tcName.selectedID) == 'undefined') {
  		this.inform(3); // 表示没有选择测试用例
  		return;
  	}
  	this.urlTc.mumId = this.tcName.selectedID;
  	
  	if (typeof(this.urlName.urls) == 'undefined') {
  		this.inform(4); // 表示没有接口相关信息
  		return;
  	}
  	if (typeof(this.urlName.selectedID) == 'undefined') {
  		this.inform(5); // 表示没有选择接口
  		return;
  	}
  	this.urlTc.mtcId = this.urlName.selectedID;
  	
  	this.urlTcService.addUrlTc(this.urlTc).then(flag => this.inform(flag ? 0 : 1));
  }
  // 通知信息
	inform(flag: number) {
		this.msgs = [];
		if (flag == 0) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'添加成功'});
  	} else if (flag == 1) {
  		this.msgs.push({severity:'error', summary:'Error', detail:'添加失败'});
  	} else if (flag == 2) {
  		this.msgs.push({severity:'error', summary:'无测试用例信息', detail:'请先添加测试用例'});
  	} else if (flag == 3) {
  		this.msgs.push({severity:'error', summary:'未选择测试用例', detail:'请选择测试用例'});
  	} else if (flag == 4) {
  		this.msgs.push({severity:'error', summary:'无接口信息', detail:'请先添加接口'});
  	} else if (flag == 5) {
  		this.msgs.push({severity:'error', summary:'未选择接口', detail:'请选择接口'});
  	}
	}
  // 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}
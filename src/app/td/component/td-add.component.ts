import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Td } from '../td';
import { TdService } from '../td.service';
import { UrlNameComponent } from './url-name.component';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: '../view/td-add.component.html'
})

export class TdAddComponent implements OnInit {
	@ViewChild(UrlNameComponent) urlName: UrlNameComponent;
	td = new Td();
	msgs: Message[] = [];
	userform: FormGroup;
	recommend: boolean;

  constructor(
	  private tdService: TdService,
	  private location: Location,
	  private fb: FormBuilder
  ) {}
  ngOnInit() {
  	this.userform = this.fb.group({
  	  'itdName': new FormControl('', [Validators.required, Validators.maxLength(30)]),
  	  'itdCols': new FormControl('', null),
  	  'itdValues': new FormControl('', null),
  	  'itdParamTypes': new FormControl('', null),
  	  'itdType': new FormControl('', Validators.pattern('^[0-1]$')),
  	  'itdExpectTime': new FormControl('', Validators.pattern('^0$|^[1-9][0-9]{0,7}$')),
  	  'itdExpectResult': new FormControl('', null),
  	  'itdExpectResultType': new FormControl('', null),
  	  'itdSql': new FormControl('', null),
  	  'itdSqlExpectResult': new FormControl('', null)
  	});
  	let name = this.userform.controls['itdName'];
  	name.valueChanges
  		.debounceTime(500)
  		.distinctUntilChanged()
  		.switchMap(name => this.tdService.validateName(name))
  		.subscribe(recommend => this.recommend = !recommend);
  }
  // 添加操作
  onSubmit(value): void {
  	if (typeof(this.urlName.urls) == 'undefined') {
  		this.inform(2); // 表示没有接口相关信息
  		return;
  	}
  	if (typeof(this.urlName.selectedID) == 'undefined') {
  		this.inform(3); // 表示没有选择接口
  		return;
  	}
  	this.td.mumId = this.urlName.selectedID;
  	this.td.itdName = value.itdName;
		let bool = this.compareInputs(value.itdCols, value.itdValues);
		if (!bool) {
			this.inform(4); // 参数值与参数名数量不对应
			return;
		}
		this.td.itdCols = value.itdCols;
		this.td.itdValues = value.itdValues;
  	this.td.itdType = value.itdType;
  	this.td.itdExpectTime = value.itdExpectTime;
  	this.td.itdExpectResult = value.itdExpectResult;
  	if (value.itdExpectResultType=='') {
  		this.td.itdExpectResultType = 'json';
  	} else {
  		this.td.itdExpectResultType = value.itdExpectResultType;
  	}
	  this.tdService.addTd(this.td).then(flag => this.inform(flag ? 0 : 1));
  }
  // 通知信息
	inform(flag: number): void {
		this.msgs = [];
		if (flag == 0) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'添加成功'});
  	} else if (flag == 1){
  		this.msgs.push({severity:'error', summary:'Error', detail:'添加失败'});
  	} else if (flag == 2){
  		this.msgs.push({severity:'error', summary:'没有接口信息', detail:'请先添加接口'});
  	} else if (flag == 3){
  		this.msgs.push({severity:'error', summary:'没有选择接口', detail:'请先选择接口'});
  	} else if (flag == 4){
  		this.msgs.push({severity:'error', summary:'Error', detail:'参数值与参数名数量不对应'});
  	}
	}
  // 返回上一页面
  goBack(): void {
	  this.location.back();
	}
	onUpload(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: '上传成功', detail: ''});
  }
  onError(event) {
  	this.msgs = [];
    this.msgs.push({severity: 'error', summary: '上传失败', detail: ''});
  }
  compareInputs(cols: string, values: string): boolean {
  	let cols_splits = cols.split('#');
  	let vals_splits = values.split('#');
  	if (cols_splits.length == vals_splits.length) {
  		return true;
  	}
  	return false;
  }
}

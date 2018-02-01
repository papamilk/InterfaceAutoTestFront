import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';

import { Td } from '../td';
import { TdService } from '../td.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'td-detail',
  templateUrl: '../view/td-detail.component.html'
})

export class TdDetailComponent implements OnInit{
	@Input() td: Td;

	msgs: Message[] = [];
	flag = true;

	constructor(
	  private tdService: TdService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.tdService.getTd(+params.get('id')))
	    .subscribe(td => this.td = td);
	}

	// 更新操作
	onSubmit(value) {
  	this.td.mumId = value.mumId;
  	if (value.itdName==null) {
  		this.td.itdName = '';
  	} else {
  		this.td.itdName = value.itdName;
  	}
		let bool = this.compareInputs(value.itdCols, value.itdValues);
		if (!bool) {
			this.inform(2);
			return;
		}
  	if (value.itdType==null) {
  		this.td.itdType = 1;
  	} else {
  		this.td.itdType = value.itdType;
  	}
  	this.td.itdExpectTime = value.itdExpectTime;
  	if (value.itdExpectResult==null) {
  		this.td.itdExpectResult = '';
  	} else {
  		this.td.itdExpectResult = value.itdExpectResult;
  	}
  	if (value.itdExpectResultType==null) {
  		this.td.itdExpectResultType = 'json';
  	} else {
  		this.td.itdExpectResultType = value.itdExpectResultType;
  	}
  	this.tdService.updateTd(this.td).then(flag => this.inform(flag ? 0 : 1));
  }

	// 通知信息
	inform(flag: number): void {
		this.msgs = [];
		if (flag == 0) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'更新成功'});
  	} else if (flag == 1){
  		this.msgs.push({severity:'error', summary:'Error', detail:'更新失败'});
  	} else if (flag == 2){
  		this.msgs.push({severity:'error', summary:'Error', detail:'参数值与参数名不对应'});
  	}
	}

	compareInputs(cols: string, values: string): boolean {
  	let cols_splits = cols.split('#');
  	let vals_splits = values.split('#');
  	if (cols_splits.length == vals_splits.length) {
  		return true;
  	}
  	return false;
  }

	// 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}

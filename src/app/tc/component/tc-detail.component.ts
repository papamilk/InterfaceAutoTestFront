import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message,DataTableModule,SharedModule} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Tc } from '../tc';
import { TcService } from '../tc.service';
import { Td } from '../../td/td';
import { TdService } from '../../td/td.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'tc-detail',
  templateUrl: '../view/tc-detail.component.html'
})

export class TcDetailComponent implements OnInit {
	tc: Tc;
	tds: Td[];
	td: Td;
  selectedTd: Td;
  dialogVisible: boolean;
	msgs: Message[] = [];

	constructor(
	  private tcService: TcService,
	  private tdService: TdService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}

	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.tcService.getTc(+params.get('id')))
	    .subscribe(tc => this.tc = tc);
    this.route.paramMap
      .switchMap((params: ParamMap) => this.tdService.getIdsByMtcId(+params.get('id')))
      .subscribe(tds => this.tds = tds);
	}

	// 更新操作
	onSubmit(value) {
  	this.tc.mtcName = value.mtcName;
  	this.tc.mtcType = value.mtcType;
    this.tcService.updateTc(this.tc).then(flag => this.inform(flag));
  }

	onRowSelect(event) {
    console.log("come in ... onRowSelect")
    console.log(event.data);
    console.log("selected:" + this.selectedTd);
    this.td = this.cloneTd(event.data);
    console.log("print td" + this.td);
    this.dialogVisible = true;
	}

	cloneTd(c: Td): Td {
    let td = new Td()
    for(let prop in c) {
        td[prop] = c[prop];
    }
    return td;
	}

	save() {
    let tds = [...this.tds];
    tds[this.findSelectedTdIndex()] = this.td;
    this.tds = tds;
    this.td = null;
    this.dialogVisible = false;
	}

	delete() {
    let index = this.findSelectedTdIndex();
    this.tds = this.tds.filter((val,i) => i!=index);
    this.td = null;
    this.dialogVisible = false;
	}

	findSelectedTdIndex(): number {
	  return this.tds.indexOf(this.selectedTd);
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


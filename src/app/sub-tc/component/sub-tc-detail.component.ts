import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { SubTc } from '../sub-tc';
import { SubTcService } from '../sub-tc.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'subTc-detail',
  templateUrl: '../view/sub-tc-detail.component.html'
})

export class SubTcDetailComponent implements OnInit {
	@Input() subTc: SubTc;
	msgs: Message[] = [];
	
	constructor(
	  private subTcService: SubTcService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.subTcService.getSubTc(+params.get('id')))
	    .subscribe(subTc => this.subTc = subTc);
	}
	// 更新操作
	onSubmit(value) {
  	this.subTc.iemsId = value.iemsId;
  	this.subTc.mtcId = value.mtcId;
  	this.subTcService.updateSubTc(this.subTc).then(flag => this.inform(flag));
  }
	
	// 通知信息
	inform(flag: boolean) {
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
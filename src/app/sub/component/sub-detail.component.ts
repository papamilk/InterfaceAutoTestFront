import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Sub } from '../sub';
import { SubService } from '../sub.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'sub-detail',
  templateUrl: '../view/sub-detail.component.html'
})

export class SubDetailComponent implements OnInit {
	@Input() sub: Sub;
	msgs: Message[] = [];
	
	constructor(
	  private subService: SubService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.subService.getSub(+params.get('id')))
	    .subscribe(sub => this.sub = sub);
	}
	// 更新操作
	onSubmit(value) {
  	this.sub.iemId = value.iemId;
  	this.subService.updateSub(this.sub).then(flag => this.inform(flag));
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
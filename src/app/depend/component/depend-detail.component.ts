import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Depend } from '../depend';
import { DependService } from '../depend.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'depend-detail',
  templateUrl: '../view/depend-detail.component.html'
})

export class DependDetailComponent implements OnInit {
	@Input() depend: Depend;
	
	msgs: Message[] = [];
	
	constructor(
	  private dependService: DependService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.dependService.getDepend(+params.get('id')))
	    .subscribe(depend => this.depend = depend);
	}
	
	// 更新操作
	onSubmit(value) {
  	this.depend.itdId = value.itdId;
  	this.depend.itddDependency = value.itddDependency;
  	this.depend.itddType = value.itddType;
  	
  	this.dependService.updateDepend(this.depend).then(flag => this.inform(flag));
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
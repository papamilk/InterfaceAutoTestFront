import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Main } from '../main';
import { MainService } from '../main.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'main-detail',
  templateUrl: '../view/main-detail.component.html'
})

export class MainDetailComponent implements OnInit {
	@Input() main: Main;
	
	msgs: Message[] = [];
	
	constructor(
	  private mainService: MainService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.mainService.getMain(+params.get('id')))
	    .subscribe(main => this.main = main);
	}
	
	// 更新操作
	onSubmit(value) {
  	this.main.mpId = value.mpId;
  	this.main.iemName = value.iemName;
  	this.mainService.updateMain(this.main).then(flag => this.inform(flag));
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
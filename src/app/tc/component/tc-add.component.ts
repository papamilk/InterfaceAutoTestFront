import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Tc } from '../tc';
import { TcService } from '../tc.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: '../view/tc-add.component.html'
})

export class TcAddComponent implements OnInit {
	tc = new Tc();
	msgs: Message[] = [];
	userform: FormGroup;
	recommend: boolean;

  constructor(
	  private tcService: TcService,
	  private location: Location,
	  private fb: FormBuilder
  ) {}
  ngOnInit() {
  	this.userform = this.fb.group({
  	  'mtcName': new FormControl('', [Validators.required, Validators.maxLength(50)]),
  	  'mtcType': new FormControl('', Validators.pattern('^[0-2]$'))
  	});
  	let name = this.userform.controls['mtcName'];
  	name.valueChanges
  		.debounceTime(500)
  		.distinctUntilChanged()
  		.switchMap(name => this.tcService.validateName(name))
  		.subscribe(recommend => this.recommend = !recommend);
  }
  // 添加操作
  onSubmit(value) {
  	if (typeof(value.mtcName) == 'undefined') {
  		this.tc.mtcName = '';
  	} else {
  		this.tc.mtcName = value.mtcName;
  	}
  	if (typeof(value.mtcType) == 'undefined') {
  		this.tc.mtcType = 0;
  	} else {
  		this.tc.mtcType = value.mtcType;
  	}
  	this.tcService.addTc(this.tc).then(flag => this.inform(flag));
  }
  // 通知信息
	inform(flag: boolean) {
		this.msgs = [];
		if (flag) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'添加成功'});
  	} else {
  		this.msgs.push({severity:'error', summary:'Error', detail:'添加失败'});
  	}
	}
  // 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}

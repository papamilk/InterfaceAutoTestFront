import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Url } from '../url';
import { UrlService } from '../url.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: '../view/url-add.component.html'
})

export class UrlAddComponent implements OnInit {
	url = new Url();
	msgs: Message[] = [];
	userform: FormGroup;
	recommend: boolean;
	
  constructor(
	  private urlService: UrlService,
	  private location: Location,
	  private fb: FormBuilder
  ) {}
  ngOnInit() {
  	this.userform = this.fb.group({
  	  'mumName': new FormControl('', [Validators.required, Validators.maxLength(50)]),
  	  'mumUrlPath': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(80)])),
  	  'mumMethodType': new FormControl('', Validators.maxLength(10))
  	});
  	let name = this.userform.controls['mumName'];
  	name.valueChanges
  		.debounceTime(500)
  		.distinctUntilChanged()
  		.switchMap(name => this.urlService.validateName(name))
  		.subscribe(recommend => this.recommend = recommend);
  }
  // 添加操作
  onSubmit(value) {
  	this.url.mumUrlPath = value.mumUrlPath;
  	if (typeof(value.mumName) == 'undefined') {
  		this.url.mumName = '';
  	} else {
  		this.url.mumName = value.mumName;
  	}
  	if (typeof(value.mumMethodType) == 'undefined') {
  		this.url.mumMethodType = 'post';
  	} else {
  		this.url.mumMethodType = value.mumMethodType;
  	}
  	this.urlService.addUrl(this.url).then(flag => this.inform(flag));
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
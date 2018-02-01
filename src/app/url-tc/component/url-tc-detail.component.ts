import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { UrlTc } from '../url-tc';
import { UrlTcService } from '../url-tc.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'url-tc-detail',
  templateUrl: '../view/url-tc-detail.component.html'
})

export class UrlTcDetailComponent implements OnInit {
	@Input() urlTc: UrlTc;
	
	msgs: Message[] = [];
	
	constructor(
	  private urlTcService: UrlTcService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.urlTcService.getUrlTc(+params.get('id')))
	    .subscribe(urlTc => this.urlTc = urlTc);
	}
	
	// 更新操作
	onSubmit(value) {
  	this.urlTc.mumId = value.mumId;
  	this.urlTc.mtcId = value.mtcId;
  	this.urlTcService.updateUrlTc(this.urlTc).then(flag => this.inform(flag));
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
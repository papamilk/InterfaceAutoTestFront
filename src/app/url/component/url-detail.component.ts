import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { Url } from '../url';
import { UrlService } from '../url.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'url-detail',
  templateUrl: '../view/url-detail.component.html'
})

export class UrlDetailComponent implements OnInit {
	@Input() url: Url;
	
	msgs: Message[] = [];
	
	constructor(
	  private urlService: UrlService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.urlService.getUrl(+params.get('id')))
	    .subscribe(url => this.url = url);
	}
	
	// 更新操作
	onSubmit(value) {
  	if (typeof(value.mumName)=="undefined") {
  		this.url.mumName = '';
  	} else {
  		this.url.mumName = value.mumName;
  	}
  	this.url.mumUrlPath = value.mumUrlPath;
  	this.url.mumMethodType = value.mumMethodType;
  	this.urlService.updateUrl(this.url).then(flag => this.inform(flag));
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
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { RURL } from '../rurl';
import { RURLService } from '../rurl.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rurl-detail',
  templateUrl: '../view/rurl-detail.component.html'
})

export class RURLDetailComponent implements OnInit {
	@Input() rurl: RURL;
	
	msgs: Message[] = [];
	
	constructor(
	  private rurlService: RURLService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.rurlService.getRURL(+params.get('id')))
	    .subscribe(rurl => this.rurl = rurl);
	}
	
	// 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}
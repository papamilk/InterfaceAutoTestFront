import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { RTC } from '../rtc';
import { RTCService } from '../rtc.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rtc-detail',
  templateUrl: '../view/rtc-detail.component.html'
})

export class RTCDetailComponent implements OnInit {
	@Input() rtc: RTC;
	
	msgs: Message[] = [];
	
	constructor(
	  private rtcService: RTCService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.rtcService.getRTC(+params.get('id')))
	    .subscribe(rtc => this.rtc = rtc);
	}
	
	// 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}
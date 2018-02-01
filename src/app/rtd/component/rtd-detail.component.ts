import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { RTD } from '../rtd';
import { RTDService } from '../rtd.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rtd-detail',
  templateUrl: '../view/rtd-detail.component.html'
})

export class RTDDetailComponent implements OnInit {
	@Input() rtd: RTD;
	
	msgs: Message[] = [];
	
	constructor(
	  private rtdService: RTDService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.rtdService.getRTD(+params.get('id')))
	    .subscribe(rtd => this.rtd = rtd);
	}
	
	// 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}
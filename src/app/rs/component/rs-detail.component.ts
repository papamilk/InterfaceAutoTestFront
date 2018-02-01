import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { RS } from '../rs';
import { RSService } from '../rs.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rs-detail',
  templateUrl: '../view/rs-detail.component.html'
})

export class RSDetailComponent implements OnInit {
	@Input() rs: RS;
	
	msgs: Message[] = [];
	
	constructor(
	  private rsService: RSService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.rsService.getRS(+params.get('id')))
	    .subscribe(rs => this.rs = rs);
	}
	
	// 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}
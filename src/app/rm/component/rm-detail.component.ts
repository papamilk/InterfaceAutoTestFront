import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {Message} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { RM } from '../rm';
import { RMService } from '../rm.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rm-detail',
  templateUrl: '../view/rm-detail.component.html'
})

export class RMDetailComponent implements OnInit {
	@Input() rm: RM;
	
	msgs: Message[] = [];
	
	constructor(
	  private rmService: RMService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private fb: FormBuilder
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.rmService.getRM(+params.get('id')))
	    .subscribe(rm => this.rm = rm);
	}
	
	// 返回上一页面
  goBack(): void {
	  this.location.back();
	}
}
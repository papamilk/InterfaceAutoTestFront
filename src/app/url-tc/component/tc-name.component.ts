import { Component, OnInit, DoCheck } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { Tc } from "../../tc/tc";
import { TcService } from '../../tc/tc.service';

@Component({
  selector: 'tc-name',
  templateUrl: '../view/tc-name.component.html'
})

export class TcNameComponent implements OnInit, DoCheck {
	tcs: Tc[];
	names: SelectItem[];
	selectedID: number;
	flag = true;
  constructor(private tcService: TcService) { }
  
  ngOnInit(): void {
  	this.tcService.getTcs().then(tcs => this.tcs = tcs);
  }
  
  ngDoCheck(): void {
  	if (this.flag&&!(typeof(this.tcs)=="undefined")) {
  		this.flag = false;
  		this.names = [];
	  	for (let i = 0; i < this.tcs.length; i++) {
	  		this.names.push({label:this.tcs[i].mtcName, value:this.tcs[i].mtcId});
	  	}
  	}
	}
}
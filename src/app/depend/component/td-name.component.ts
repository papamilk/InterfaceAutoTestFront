import { Component, OnInit, DoCheck } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { Td } from "../../td/td";
import { TdService } from '../../td/td.service';

@Component({
  selector: 'td-name',
  templateUrl: '../view/td-name.component.html'
})

export class TdNameComponent implements OnInit, DoCheck {
	tds: Td[];
	names: SelectItem[];
	selectedID: number;
	flag = true;
  constructor(private tdService: TdService) { }
  
  ngOnInit(): void {
  	this.tdService.getTds().then(tds => this.tds = tds);
  }
  
  ngDoCheck(): void {
  	if (this.flag&&!(typeof(this.tds)=="undefined")) {
  		this.flag = false;
  		this.names = [];
	  	for (let i = 0; i < this.tds.length; i++) {
	  		this.names.push({label:this.tds[i].itdName, value:this.tds[i].itdId});
	  	}
  	}
	}
}
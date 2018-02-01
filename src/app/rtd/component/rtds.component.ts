import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { RTD } from "../rtd";

import { RTDService } from '../rtd.service';

@Component({
  selector: 'rtds',
  templateUrl: '../view/rtds.component.html'
})

export class RTDsComponent implements OnInit {
	rtds: RTD[];
	
	selectedRTD: RTD;
	
	constructor(
		private rtdService: RTDService,
		private router: Router
	) { }
	
	getRTDs(): void {
		this.rtdService.getRTDs().then(rtds => this.rtds = rtds);
	}
	
	ngOnInit(): void {
	  this.getRTDs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/rtd/detail/', event.data.trtdId]);
	}
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { RTC } from "../rtc";

import { RTCService } from '../rtc.service';

@Component({
  selector: 'rtcs',
  templateUrl: '../view/rtcs.component.html'
})

export class RTCsComponent implements OnInit {
	rtcs: RTC[];
	
	selectedRTC: RTC;
	
	constructor(
		private rtcService: RTCService,
		private router: Router
	) { }
	
	getRTCs(): void {
		this.rtcService.getRTCs().then(rtcs => this.rtcs = rtcs);
	}
	
	ngOnInit(): void {
	  this.getRTCs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/rtc/detail/', event.data.trtcId]);
	}
}
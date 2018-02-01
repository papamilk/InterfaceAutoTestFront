import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { RM } from "../rm";

import { RMService } from '../rm.service';

@Component({
  selector: 'rms',
  templateUrl: '../view/rms.component.html'
})

export class RMsComponent implements OnInit {
	rms: RM[];
	
	selectedRM: RM;
	
	constructor(
		private rmService: RMService,
		private router: Router
	) { }
	
	getRMs(): void {
		this.rmService.getRMs().then(rms => this.rms = rms);
	}
	
	ngOnInit(): void {
	  this.getRMs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/rm/detail/', event.data.trmId]);
	}
}
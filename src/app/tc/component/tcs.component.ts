import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { Tc } from "../tc";

import { TcService } from '../tc.service';

@Component({
  selector: 'tcs',
  templateUrl: '../view/tcs.component.html'
})

export class TcsComponent implements OnInit {
	tcs: Tc[];
	
	selectedTc: Tc;
	
	constructor(
		private tcService: TcService,
		private router: Router
	) { }
	
	getTcs(): void {
		this.tcService.getTcs().then(tcs => this.tcs = tcs);
	}
	
	ngOnInit(): void {
	  this.getTcs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/tc/detail/', event.data.mtcId]);
	}
}
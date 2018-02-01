import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { SubTc } from "../sub-tc";
import { SubTcService } from '../sub-tc.service';

@Component({
  selector: 'subTcs',
  templateUrl: '../view/sub-tcs.component.html'
})

export class SubTcsComponent implements OnInit {
	subTcs: SubTc[];
	
	selectedSubTc: SubTc;
	
	constructor(
		private subTcService: SubTcService,
		private router: Router
	) { }
	
	getSubTcs(): void {
		this.subTcService.getSubTcs().then(subTcs => this.subTcs = subTcs);
	}
	
	ngOnInit(): void {
	  this.getSubTcs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/subTc/detail/', event.data.ietcId]);
	}
}
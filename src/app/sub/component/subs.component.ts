import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { Sub } from "../sub";

import { SubService } from '../sub.service';

@Component({
  selector: 'subs',
  templateUrl: '../view/subs.component.html'
})

export class SubsComponent implements OnInit {
	subs: Sub[];
	
	selectedSub: Sub;
	
	constructor(
		private subService: SubService,
		private router: Router
	) { }
	
	getSubs(): void {
		this.subService.getSubs().then(subs => this.subs = subs);
	}
	
	ngOnInit(): void {
	  this.getSubs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/sub/detail/', event.data.iemsId]);
	}
}
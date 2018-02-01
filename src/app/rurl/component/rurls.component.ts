import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { RURL } from "../rurl";

import { RURLService } from '../rurl.service';

@Component({
  selector: 'rurls',
  templateUrl: '../view/rurls.component.html'
})

export class RURLsComponent implements OnInit {
	rurls: RURL[];
	
	selectedRURL: RURL;
	
	constructor(
		private rurlService: RURLService,
		private router: Router
	) { }
	
	getRURLs(): void {
		this.rurlService.getRURLs().then(rurls => this.rurls = rurls);
	}
	
	ngOnInit(): void {
	  this.getRURLs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/rurl/detail/', event.data.truId]);
	}
}
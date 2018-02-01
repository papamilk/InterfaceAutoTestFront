import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { UrlTc } from "../url-tc";

import { UrlTcService } from '../url-tc.service';

@Component({
  selector: 'urlTcs',
  templateUrl: '../view/url-tcs.component.html'
})

export class UrlTcsComponent implements OnInit {
	urlTcs: UrlTc[];
	
	selectedUrlTc: UrlTc;
	
	constructor(
		private urlTcService: UrlTcService,
		private router: Router
	) { }
	
	getUrlTcs(): void {
		this.urlTcService.getUrlTcs().then(urlTcs => this.urlTcs = urlTcs);
	}
	
	ngOnInit(): void {
	  this.getUrlTcs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/urlTc/detail/', event.data.iutcId]);
	}
}
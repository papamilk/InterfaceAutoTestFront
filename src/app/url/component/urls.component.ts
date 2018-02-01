import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { Url } from "../url";

import { UrlService } from '../url.service';

@Component({
  selector: 'urls',
  templateUrl: '../view/urls.component.html'
})

export class UrlsComponent implements OnInit {
	urls: Url[];
	
	selectedUrl: Url;
	
	constructor(
		private urlService: UrlService,
		private router: Router
	) { }
	
	getUrls(): void {
		this.urlService.getUrls().then(urls => this.urls = urls);
	}
	
	ngOnInit(): void {
	  this.getUrls();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/url/detail/', event.data.mumId]);
	}
}
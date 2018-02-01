import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { RS } from "../rs";

import { RSService } from '../rs.service';

@Component({
  selector: 'rss',
  templateUrl: '../view/rss.component.html'
})

export class RSsComponent implements OnInit {
	rss: RS[];
	
	selectedRS: RS;
	
	constructor(
		private rsService: RSService,
		private router: Router
	) { }
	
	getRSs(): void {
		this.rsService.getRSs().then(rss => this.rss = rss);
	}
	
	ngOnInit(): void {
	  this.getRSs();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/rs/detail/', event.data.trsId]);
	}
}
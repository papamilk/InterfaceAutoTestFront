import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { Depend } from "../depend";

import { DependService } from '../depend.service';

@Component({
  selector: 'depends',
  templateUrl: '../view/depends.component.html'
})

export class DependsComponent implements OnInit {
	depends: Depend[];
	
	selectedDepend: Depend;
	
	constructor(
		private dependService: DependService,
		private router: Router
	) { }
	
	getDepends(): void {
		this.dependService.getDepends().then(depends => this.depends = depends);
	}
	
	ngOnInit(): void {
	  this.getDepends();
	}
	
	handleRowSelect(event) {
    this.router.navigate(['/depend/detail/', event.data.itddId]);
	}
}
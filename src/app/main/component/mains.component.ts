import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Main } from "../main";
import { MainService } from '../main.service';

@Component({
  selector: 'mains',
  templateUrl: '../view/mains.component.html'
})

export class MainsComponent implements OnInit {
	mains: Main[];

	selectedMain: Main;

	constructor(
		private mainService: MainService,
		private router: Router
	) { }

	getMains(): void {
		this.mainService.getMains().then(mains => this.mains = mains);
	}

	ngOnInit(): void {
	  this.getMains();
	}

	handleRowSelect(event) {
    this.router.navigate(['/main/detail/', event.data.iemId]);
	}
}

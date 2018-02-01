import { Component, OnInit, DoCheck } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { Main } from "../../main/main";
import { MainService } from '../../main/main.service';

@Component({
  selector: 'main-name',
  templateUrl: '../view/main-name.component.html'
})

export class MainNameComponent implements OnInit, DoCheck {
	mains: Main[];
	names: SelectItem[];
	selectedID: number;
	flag = true;
  constructor(private mainService: MainService) { }
  
  ngOnInit(): void {
  	this.mainService.getMains().then(mains => this.mains = mains);
  }
  
  ngDoCheck(): void {
  	if (this.flag&&!(typeof(this.mains)=="undefined")) {
  		this.flag = false;
  		this.names = [];
	  	for (let i = 0; i < this.mains.length; i++) {
	  		this.names.push({label:this.mains[i].iemName, value:this.mains[i].iemId});
	  	}
  	}
	}
}
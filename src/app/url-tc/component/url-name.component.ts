import { Component, OnInit, DoCheck } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { Url } from "../../url/url";
import { UrlService } from '../../url/url.service';

@Component({
  selector: 'url-name',
  templateUrl: '../view/url-name.component.html'
})

export class UrlNameComponent implements OnInit, DoCheck {
	urls: Url[];
	names: SelectItem[];
	selectedID: number;
	flag = true;
  constructor(private urlService: UrlService) { }
  
  ngOnInit(): void {
  	this.urlService.getUrls().then(urls => this.urls = urls);
  }
  
  ngDoCheck(): void {
  	if (this.flag&&!(typeof(this.urls)=="undefined")) {
  		this.flag = false;
  		this.names = [];
	  	for (let i = 0; i < this.urls.length; i++) {
	  		this.names.push({label:this.urls[i].mumName, value:this.urls[i].mumId});
	  	}
  	}
	}
}
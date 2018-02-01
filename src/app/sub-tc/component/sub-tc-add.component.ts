import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Message,SelectItem} from 'primeng/primeng';

import { SubTc } from '../sub-tc';
import { SubTcService } from '../sub-tc.service';
import { Main } from "../../main/main";
import { MainService } from '../../main/main.service';
import { Sub } from "../../sub/sub";
import { SubService } from '../../sub/sub.service';
import { Tc } from "../../tc/tc";
import { TcService } from '../../tc/tc.service';

@Component({
  templateUrl: '../view/sub-tc-add.component.html'
})

export class SubTcAddComponent {
	subTc = new SubTc();
	msgs: Message[] = [];
	mains: Main[];
	subs: Sub[];
	tcs: Tc[];
	mainNames: SelectItem[];
	subNames: SelectItem[];
	tcNames: SelectItem[];
	selectedMain: Main;
	selectedSub: Sub;
	selectedTc: Tc;
	flag = false;
	subFlag = false;
	tcFlag = false;
	
	
  constructor(
	  private subTcService: SubTcService,
	  private mainService: MainService,
	  private subService: SubService,
	  private tcService: TcService,
	  private location: Location
  ) {}
  ngOnInit() {
  	this.mainService.getMains().then(mains => this.mains = mains).then(() => this.flag = true);
  }
  ngDoCheck(): void {
  	if (this.flag&&!(typeof(this.mains)=="undefined")) {
  		this.flag = false;
  		this.mainNames = [];
	  	for (let i = 0; i < this.mains.length; i++) {
	  		this.mainNames.push({label:this.mains[i].iemName, value:this.mains[i]});
	  	}
  	}
  	if (this.subFlag) {
  		this.subFlag = false;
  		this.subNames = [];
	  	for (let i = 0; i < this.subs.length; i++) {
	  		this.subNames.push({label:this.subs[i].iemsId + '', value:this.subs[i]});
	  	}
  	}
  	if (this.tcFlag) {
  		this.tcFlag = false;
  		this.tcNames = [];
	  	for (let i = 0; i < this.tcs.length; i++) {
	  		this.tcNames.push({label:this.tcs[i].mtcName, value:this.tcs[i]});
	  	}
  	}
	}
  // 添加操作
  onSubmit(): void {
  	this.subTc.iemsId = this.selectedSub.iemsId;
  	this.subTc.mtcId = this.selectedTc.mtcId;
  	this.subTcService.addSubTc(this.subTc).then(flag => this.inform(flag));
  }
  // 通知信息
	inform(flag: boolean) {
		this.msgs = [];
		if (flag) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'添加成功'});
  	} else {
  		this.msgs.push({severity:'error', summary:'Error', detail:'添加失败'});
  	}
	}
  // 返回上一页面
  goBack(): void {
	  this.location.back();
	}
  onMainChange(): void {
  	this.subService.getSubsByIemId(this.selectedMain.iemId).then(subs => this.subs = subs).then(() => this.subFlag = true);
  	this.tcService.getTcs().then(tcs => this.tcs = tcs).then(() => this.tcFlag = true);
  }
  onSubChange(): void {
  }
  onTcChange(): void {
  }
}
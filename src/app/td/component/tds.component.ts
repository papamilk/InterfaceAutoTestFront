import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Message, SelectItem } from 'primeng/primeng';

import { Td } from "../td";

import { TdService } from '../td.service';
import { ProjectService } from '../../project/project.service'
import { MainService } from '../../main/main.service'
import {Project} from "../../project/project";
import {Main} from "../../main/main";
import {TD_DOWNLOAD_DATA_FILE} from "../../urls";

@Component({
  selector: 'tds',
  templateUrl: '../view/tds.component.html'
})

export class TdsComponent implements OnInit, DoCheck {
  msgs: Message[] = [];
	tds: Td[];
  mains: Main[];
  projects: Project[];
  mainFlag = true;
  projectFlag = true;
  mainNames: SelectItem[];
  projectNames: SelectItem[];
  selectedMpId: number;
  selectedIemId: number;

	selectedTd: Td;

	constructor(
		private tdService: TdService,
		private mainService: MainService,
		private projectService: ProjectService,
		private router: Router
	) { }

	getTds(): void {
		this.tdService.getTds().then(tds => this.tds = tds);
	}

	ngOnInit(): void {
	  this.getTds();
    this.mainService.getMains().then(mains => this.mains = mains);
    this.projectService.getProjects().then(projects => this.projects = projects);
	}

  ngDoCheck(): void {
    if (this.mainFlag&&!(typeof(this.mains)=="undefined")) {
      this.mainFlag = false;
      this.mainNames = [];
      for (let i = 0; i < this.mains.length; i++) {
        this.mainNames.push({label:this.mains[i].iemName, value:this.mains[i].iemId});
      }
    }
    if (this.projectFlag&&!(typeof(this.projects)=="undefined")) {
      this.projectFlag = false;
      this.projectNames = [];
      for (let i = 0; i < this.projects.length; i++) {
        this.projectNames.push({label:this.projects[i].mpName, value:this.projects[i].mpId});
      }
    }
  }

  downloadDataFile(): void {
    console.log(this.selectedMpId);
    if (undefined == this.selectedMpId) {
      this.msgs.push({severity:'error', summary:'错误', detail:'请选择项目'});
      return;
    }

    if (undefined == this.selectedIemId) {
      this.msgs.push({severity:'error', summary:'错误', detail:'请选择场景'});
      return;
    }
    let URL = `${TD_DOWNLOAD_DATA_FILE}` + "?mpId=" + this.selectedMpId + "&iemId=" + this.selectedIemId ;
    window.open(URL);
  }

	handleRowSelect(event) {
    this.router.navigate(['/td/detail/', event.data.itdId]);
	}
}

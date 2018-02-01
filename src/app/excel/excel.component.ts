import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Message, SelectItem } from 'primeng/primeng';
import { Main } from "../main/main";
import { MainService } from '../main/main.service';
import { ExcelService } from './excel.service';
import { EXCEL_DOWNLOAD, EXCEL_DOWNLOAD_TEMPLATE, EXECUTE_TEST_PREFIX } from "../urls";

@Component({
  selector: 'excel',
  templateUrl: './excel.component.html'
})

export class ExcelComponent implements OnInit, DoCheck {
	mains: Main[];
	msgs: Message[] = [];
	names: SelectItem[];
	// 自动化数据上传并解析路径
  uploadAndParseUrl = `${EXECUTE_TEST_PREFIX}/parseDataFile`;
	selectedID: number;
	flag = true;
  checked: boolean = false;
  validationInfo: string[];

  constructor(
	  private mainService: MainService,
	  private excelService: ExcelService,
    private router: Router
  ) {}

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

  // 下载excel操作
  download(): void {
  	let iemId: number;
  	if (typeof(this.selectedID)=="undefined") {
  		iemId = 1; // 默认下载第一个执行场景
  	} else {
  		iemId = this.selectedID;
  	}
  	let URL = `${EXCEL_DOWNLOAD}` + '?' + 'iemId=' + iemId;
  	window.open(URL);
  }

  parseDataFile(): void{
    this.excelService.parseDataFile().then(result => this.inform(result));
  }

  validateExpectResult() {
    this.router.navigate(['excel/validate']);
  }

  downloadTemplate(): void {
    let URL = `${EXCEL_DOWNLOAD_TEMPLATE}`;
    window.open(URL);
  }

  // 通知信息
  inform(result: any) {
    this.msgs = [];
    switch (result.errorCode) {
      case '1': this.msgs.push({severity: 'error', summary: '数据不一致', detail: ''});
        break;
      case '0': this.msgs.push({severity: 'info', summary: '数据一致', detail: ''});
        break;
      case '-1': this.msgs.push({severity: 'error', summary: '对比出现异常', detail: ''});
        break;
    }
  }

  onBeforeUpload(event) {
    event.formData.append('isOverWrite', this.checked);
  }

  onError(event) {
  	this.msgs = [];
    this.msgs.push({severity: 'error', summary: '', detail: ''});
  }


  onUpload(event) {
    let result: any = JSON.parse(event.xhr.response);
    this.msgs = [];
    if (result.resultType) {
      this.msgs.push({severity: 'info', summary: '上传成功', detail: result.data.msg});
      this.validationInfo = result.data.validationInfo;
    } else {
      this.msgs.push({severity: 'error', summary: '上传失败', detail: result.error});
    }
  }
}

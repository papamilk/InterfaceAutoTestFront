import { Component, OnInit, DoCheck  } from '@angular/core';
import {Message, SelectItem} from 'primeng/primeng';

import { Main } from "../main/main";
import { MainService } from '../main/main.service';
import { EXECUTED_LOG_FILE } from "../urls";

import { ExecuteService } from './execute.service';

@Component({
  selector: 'execute',
  templateUrl: './execute.component.html'
})

export class ExecuteComponent implements OnInit, DoCheck {
	msgs: Message[] = [];
  mains: Main[];
  names: SelectItem[];
  selectedID: number;
  flag = true;
  totalCount: number;
  executedCount: number = 0;
  unit: string;
  interval: any;

  constructor(
	  private executeService: ExecuteService,
    private mainService: MainService
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

  // 执行操作
  onSubmit() {
    if (typeof(this.selectedID) == 'undefined') {
      this.inform(3); // 表示没有选择名称
      return;
    }
    this.executeService.execute(this.selectedID).then(flag => this.inform(flag ? 0 : 1));
    this.executeService.findTotalTestDataCount(this.selectedID).then(totalCount => {
      this.totalCount = totalCount;
      this.unit = "/" + this.totalCount;
    });
    this.interval = setInterval(() => {
      this.executeService.findExecutedTestDataCount(this.selectedID).then(executedCount => this.executedCount = executedCount);
      let width: number = this.executedCount / this.totalCount;
      let text: string = "正在执行第" + (this.executedCount + 1) + "条数据，总共" + this.totalCount + "条数据";
      if (this.executedCount >= this.totalCount) {
        this.executedCount = this.totalCount;
        width = this.executedCount / this.totalCount;
        text = "执行完成，总共" + this.totalCount + "条数据";
        this.updateProcessBar(this.toPercent(width), text);
        clearInterval(this.interval);
        return;
      }
      this.updateProcessBar(this.toPercent(width), text);
    }, 500);
  }

  // 将小数转换成百分比
  toPercent(point: number) : string {
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
  }

  // 更新进度条
  updateProcessBar(width: string, text: string): void {
    let processBar = document.getElementById('processBar');
    processBar.style.cssText = "display: block; width: " + width + ";";
    let processBarSpan = document.getElementById('processBarSpan');
    processBarSpan.innerText = text;
  }

  downloadLogFile(): void {
    let URL = `${EXECUTED_LOG_FILE}`;
    window.open(URL);
  }

  // 通知信息
	inform(flag: number) {
		this.msgs = [];
    if (flag == 0) {
      this.msgs.push({severity:'info', summary:'Success', detail:'执行测试成功'});
      let text = "执行完成，总共" + this.totalCount + "条数据";
      let width = 1;
      this.updateProcessBar(this.toPercent(width), text);
    } else if (flag == 1){
      this.msgs.push({severity:'error', summary:'执行失败', detail:'服务端异常'});
    } else if (flag == 2) {
      this.msgs.push({severity:'error', summary:'无场景信息', detail:'请先填写场景信息'});
    } else if (flag == 3) {
      this.msgs.push({severity:'error', summary:'没有选择场景名称', detail:'请先选择场景名称'});
    } else if (flag == 4) {
      this.msgs.push({severity:'info', summary:'Success', detail:'清空成功'});
    } else if (flag == 5) {
      this.msgs.push({severity:'error', summary:'清空失败', detail:'清空失败'});
    }
    clearInterval(this.interval);
	}
}

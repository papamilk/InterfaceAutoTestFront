import { Component } from '@angular/core';
import {Message,SelectItem} from 'primeng/primeng';

import { DatabaseInitService } from './database-init.service';

@Component({
  selector: 'database',
  templateUrl: './database-init.component.html'
})

export class DataBaseInitComponent {
	msgs: Message[] = [];
	dbNames: SelectItem[];
	selectedName: string;
	submitted = false;

  constructor(private dbService: DatabaseInitService) {
  	this.dbNames = [];
    this.dbNames.push({label:'interface_automatic_test', value:'interface_automatic_test'});
    this.dbNames.push({label:'interface_automatic_test01', value:'interface_automatic_test01'});
    this.dbNames.push({label:'interface_automatic_test02', value:'interface_automatic_test02'});
    this.dbNames.push({label:'interface_automatic_test03', value:'interface_automatic_test03'});
    this.dbNames.push({label:'interface_automatic_test04', value:'interface_automatic_test04'});
    this.dbNames.push({label:'interface_automatic_test05', value:'interface_automatic_test05'});
  }
  onSubmit(): void {
  	this.dbService.init(this.selectedName).then(res => this.inform(res.json()));
  }
  onChange(): void {
  	this.submitted = true;
  }
	/*inform(flag: boolean): void {
		this.msgs = [];
		if (flag) {
  		this.msgs.push({severity:'info', summary:'Success', detail:'初始化成功'});
  	} else {
  		this.msgs.push({severity:'error', summary:'Error', detail:'初始化失败'});
  	}
	}*/
  inform(result: any): void {
    this.msgs = [];
    if (result.resultType) {
      this.msgs.push({severity:'info', summary:'Success', detail:'初始化成功'});
    } else {
      this.msgs.push({severity:'error', summary:'Error', detail:result.error});
    }
  }
}

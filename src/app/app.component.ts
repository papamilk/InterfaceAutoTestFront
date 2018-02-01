import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuItem} from 'primeng/primeng';

import { EXCEL_DOWNLOAD } from "./urls";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: MenuItem[];

  constructor(){}

  ngOnInit() {
  	this.items = [
  	  {
  			label: '初始化数据库', url: '/#/dataBaseInit'
  		},
  		{
  			label: '执行测试', url: '/#/execute'
  		},
  		{
  			label: '文件上传下载', url: '/#/excel'
  		},
  		{
  			label: '项目信息管理',
  			items: [
  			  {
  			  	label: '新增项目信息', url: '/#/project/add'
  			  },
  			  {
  			  	label: '查看项目信息', url: '/#/projects'
  			  }
  			]
  		},
  		{
  			label: '执行场景管理',
  			items: [
  			  {
  			  	label: '新增执行场景', url: '/#/main/add'
  			  },
  			  {
  			  	label: '查看执行场景', url: '/#/mains'
  			  }
  			]
  		},
  		/*{
       label: '执行步骤管理',
       items: [
       {
       label: '新增执行步骤', url: '/#/sub/add'
       },
       {
       label: '查看执行步骤', url: '/#/subs'
       }
       ]
       },*/
  		{
  			label: '测试用例管理',
  			items: [
  			  {
  			  	label: '新增测试用例', url: '/#/tc/add'
  			  },
  			  {
  			  	label: '查看测试用例', url: '/#/tcs'
  			  }
  			  /*{
  			  	label: '新增执行步骤与测试用例关系', url: '/#/subTc/add'
  			  },
  			  {
  			  	label: '查看执行步骤与测试用例关系', url: '/#/subTcs'
  			  }*/
  			]
  		},
  		{
  			label: '测试接口管理',
  			items: [
  			  {
  			  	label: '新增测试接口', url: '/#/url/add'
  			  },
  			  {
  			  	label: '查看测试接口', url: '/#/urls'
  			  },
  			  {
  			  	label: '新增测试用例与测试接口关系', url: '/#/urlTc/add'
  			  },
  			  {
  			  	label: '查看测试用例与测试接口关系', url: '/#/urlTcs'
  			  }
  			]
  		},
  		{
  			label: '测试数据管理',
  			items: [
  			  {
  			  	label: '新增测试数据', url: '/#/td/add'
  			  },
  			  {
  			  	label: '查看测试数据', url: '/#/tds'
  			  }
  			]
  		},
  		{
  			label: '依赖数据管理',
  			items: [
  			  {
  			  	label: '新增依赖数据', url: '/#/depend/add'
  			  },
  			  {
  			  	label: '查看依赖数据', url: '/#/depends'
  			  }
  			]
  		},
  		/*{
  			label: '执行场景结果',
  			items: [
  			  {
  			  	label: '执行场景结果列表', url: '/#/rms'
  			  }
  			]
  		},
  		{
  			label: '执行步骤结果',
  			items: [
  			  {
  			  	label: '执行步骤结果列表', url: '/#/rss'
  			  }
  			]
  		},
  		{
  			label: '测试用例结果',
  			items: [
  			  {
  			  	label: '测试用例结果列表', url: '/#/rtcs'
  			  }
  			]
  		},
  		{
  			label: '测试接口结果',
  			items: [
  			  {
  			  	label: '测试接口结果列表', url: '/#/rurls'
  			  }
  			]
  		},
  		{
  			label: '测试数据结果',
  			items: [
  			  {
  			  	label: '测试数据结果列表', url: '/#/rtds'
  			  }
  			]
  		}*/
  	]
  }
}

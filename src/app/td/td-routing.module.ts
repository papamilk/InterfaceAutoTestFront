import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TdsComponent } from './component/tds.component';
import { TdDetailComponent } from './component/td-detail.component';
import { TdAddComponent } from './component/td-add.component';

const tdRoutes: Routes = [
  { path: 'td/detail/:id',  component: TdDetailComponent },
  { path: 'tds', component: TdsComponent },
  { path: 'td/add', component: TdAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(tdRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TdRoutingModule { }



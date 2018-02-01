import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubTcsComponent } from './component/sub-tcs.component';
import { SubTcDetailComponent } from './component/sub-tc-detail.component';
import { SubTcAddComponent } from './component/sub-tc-add.component';

const subTcRoutes: Routes = [
  { path: 'subTc/detail/:id',  component: SubTcDetailComponent },
  { path: 'subTcs', component: SubTcsComponent },
  { path: 'subTc/add', component: SubTcAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(subTcRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubTcRoutingModule { }



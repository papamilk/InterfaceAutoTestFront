import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TcsComponent } from './component/tcs.component';
import { TcDetailComponent } from './component/tc-detail.component';
import { TcAddComponent } from './component/tc-add.component';

const tcRoutes: Routes = [
  { path: 'tc/detail/:id',  component: TcDetailComponent },
  { path: 'tcs', component: TcsComponent },
  { path: 'tc/add', component: TcAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(tcRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TcRoutingModule { }



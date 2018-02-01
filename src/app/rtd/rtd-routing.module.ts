import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RTDsComponent } from './component/rtds.component';
import { RTDDetailComponent } from './component/rtd-detail.component';

const rtdRoutes: Routes = [
  { path: 'rtd/detail/:id',  component: RTDDetailComponent },
  { path: 'rtds', component: RTDsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rtdRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RTDRoutingModule { }



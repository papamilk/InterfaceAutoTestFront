import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RMsComponent } from './component/rms.component';
import { RMDetailComponent } from './component/rm-detail.component';

const rmRoutes: Routes = [
  { path: 'rm/detail/:id',  component: RMDetailComponent },
  { path: 'rms', component: RMsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rmRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RMRoutingModule { }



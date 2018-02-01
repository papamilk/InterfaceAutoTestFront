import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RTCsComponent } from './component/rtcs.component';
import { RTCDetailComponent } from './component/rtc-detail.component';

const rtcRoutes: Routes = [
  { path: 'rtc/detail/:id',  component: RTCDetailComponent },
  { path: 'rtcs', component: RTCsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rtcRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RTCRoutingModule { }



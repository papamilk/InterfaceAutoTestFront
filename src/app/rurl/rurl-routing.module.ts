import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RURLsComponent } from './component/rurls.component';
import { RURLDetailComponent } from './component/rurl-detail.component';

const rurlRoutes: Routes = [
  { path: 'rurl/detail/:id',  component: RURLDetailComponent },
  { path: 'rurls', component: RURLsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rurlRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RURLRoutingModule { }



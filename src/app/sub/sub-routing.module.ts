import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubsComponent } from './component/subs.component';
import { SubDetailComponent } from './component/sub-detail.component';
import { SubAddComponent } from './component/sub-add.component';

const subRoutes: Routes = [
  { path: 'sub/detail/:id',  component: SubDetailComponent },
  { path: 'subs', component: SubsComponent },
  { path: 'sub/add', component: SubAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(subRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubRoutingModule { }



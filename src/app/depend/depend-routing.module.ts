import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DependsComponent } from './component/depends.component';
import { DependDetailComponent } from './component/depend-detail.component';
import { DependAddComponent } from './component/depend-add.component';

const dependRoutes: Routes = [
  { path: 'depend/detail/:id',  component: DependDetailComponent },
  { path: 'depends', component: DependsComponent },
  { path: 'depend/add', component: DependAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(dependRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DependRoutingModule { }



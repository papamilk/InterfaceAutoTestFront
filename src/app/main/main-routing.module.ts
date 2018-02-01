import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainsComponent } from './component/mains.component';
import { MainDetailComponent } from './component/main-detail.component';
import { MainAddComponent } from './component/main-add.component';

const mainRoutes: Routes = [
  { path: 'main/detail/:id',  component: MainDetailComponent },
  { path: 'mains', component: MainsComponent },
  { path: 'main/add', component: MainAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }



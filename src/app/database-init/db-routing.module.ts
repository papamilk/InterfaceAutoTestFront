import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBaseInitComponent } from './database-init.component';

const dbRoutes: Routes = [
    { path: 'dataBaseInit',  component: DataBaseInitComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(dbRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DataBaseRoutingModule { }



import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RSsComponent } from './component/rss.component';
import { RSDetailComponent } from './component/rs-detail.component';

const rsRoutes: Routes = [
  { path: 'rs/detail/:id',  component: RSDetailComponent },
  { path: 'rss', component: RSsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RSRoutingModule { }



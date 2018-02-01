import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UrlTcsComponent } from './component/url-tcs.component';
import { UrlTcDetailComponent } from './component/url-tc-detail.component';
import { UrlTcAddComponent } from './component/url-tc-add.component';

const urlTcRoutes: Routes = [
  { path: 'urlTc/detail/:id',  component: UrlTcDetailComponent },
  { path: 'urlTcs', component: UrlTcsComponent },
  { path: 'urlTc/add', component: UrlTcAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(urlTcRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UrlTcRoutingModule { }



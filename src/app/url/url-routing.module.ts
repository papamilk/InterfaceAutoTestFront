import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UrlsComponent } from './component/urls.component';
import { UrlDetailComponent } from './component/url-detail.component';
import { UrlAddComponent } from './component/url-add.component';

const urlRoutes: Routes = [
  { path: 'url/detail/:id',  component: UrlDetailComponent },
  { path: 'urls', component: UrlsComponent },
  { path: 'url/add', component: UrlAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(urlRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UrlRoutingModule { }



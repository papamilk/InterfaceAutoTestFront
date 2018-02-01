import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UrlsComponent } from './component/urls.component';
import { UrlDetailComponent } from './component/url-detail.component';
import { UrlAddComponent } from './component/url-add.component';

import { UrlRoutingModule } from './url-routing.module';

import { UrlService } from './url.service';

@NgModule({
  imports: [
    UrlRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    GrowlModule
  ],
  declarations: [
    UrlsComponent,
    UrlDetailComponent,
    UrlAddComponent
  ],
  providers: [ UrlService ]
})
export class UrlModule {}
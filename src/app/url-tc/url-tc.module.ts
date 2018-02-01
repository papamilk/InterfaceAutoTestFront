import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,DropdownModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UrlTcsComponent } from './component/url-tcs.component';
import { UrlTcDetailComponent } from './component/url-tc-detail.component';
import { UrlTcAddComponent } from './component/url-tc-add.component';
import { UrlNameComponent } from './component/url-name.component';
import { TcNameComponent } from './component/tc-name.component';

import { UrlTcRoutingModule } from './url-tc-routing.module';

import { UrlTcService } from './url-tc.service';

@NgModule({
  imports: [
    UrlTcRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    GrowlModule
  ],
  declarations: [
    UrlTcsComponent,
    UrlTcDetailComponent,
    UrlTcAddComponent,
    UrlNameComponent,
    TcNameComponent
  ],
  providers: [ UrlTcService ]
})
export class UrlTcModule {}
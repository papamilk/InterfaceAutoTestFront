import { NgModule } from '@angular/core';
import {InputTextareaModule,DataTableModule,DropdownModule,FileUploadModule,SharedModule,ButtonModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TdsComponent } from './component/tds.component';
import { TdDetailComponent } from './component/td-detail.component';
import { TdAddComponent } from './component/td-add.component';
import { UrlNameComponent } from './component/url-name.component';

import { TdRoutingModule } from './td-routing.module';

import { TdService } from './td.service';

@NgModule({
  imports: [
    TdRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    FileUploadModule,
    GrowlModule
  ],
  declarations: [
    TdsComponent,
    TdDetailComponent,
    TdAddComponent,
    UrlNameComponent
  ],
  providers: [ TdService ]
})
export class TdModule {}
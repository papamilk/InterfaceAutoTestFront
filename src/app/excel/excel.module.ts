import { NgModule } from '@angular/core';
import {
  DataTableModule, SharedModule, ButtonModule, DropdownModule, FileUploadModule, InputTextModule, GrowlModule,
  CheckboxModule, InputTextareaModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExcelComponent } from './excel.component';
import { ExcelValidateComponent } from './validate.component';
import { ExcelRoutingModule } from './excel-routing.module';
import { ExcelService } from './excel.service';

@NgModule({
  imports: [
    ExcelRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    GrowlModule,
    CheckboxModule,
    InputTextareaModule
  ],
  declarations: [
    ExcelComponent,
    ExcelValidateComponent
  ],
  providers: [ ExcelService ]
})
export class ExcelModule {}

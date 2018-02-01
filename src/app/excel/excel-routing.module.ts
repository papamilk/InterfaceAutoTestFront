import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExcelComponent } from './excel.component';
import { ExcelValidateComponent } from './validate.component';

const excelRoutes: Routes = [
    { path: 'excel',  component: ExcelComponent },
    { path: 'excel/validate',  component: ExcelValidateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(excelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExcelRoutingModule { }



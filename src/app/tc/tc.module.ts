import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule,DialogModule,InputTextareaModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubstringPipe } from '../substring.pipe';

import { TcsComponent } from './component/tcs.component';
import { TcDetailComponent } from './component/tc-detail.component';
import { TcAddComponent } from './component/tc-add.component';

import { TcRoutingModule } from './tc-routing.module';

import { TcService } from './tc.service';

@NgModule({
  imports: [
    TcRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    GrowlModule,
    DialogModule,
    InputTextareaModule
  ],
  declarations: [
    TcsComponent,
    TcDetailComponent,
    TcAddComponent,
    SubstringPipe
  ],
  providers: [ TcService ]
})
export class TcModule {}

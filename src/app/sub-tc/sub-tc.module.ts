import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule,SharedModule,ButtonModule,DropdownModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SubTcsComponent } from './component/sub-tcs.component';
import { SubTcDetailComponent } from './component/sub-tc-detail.component';
import { SubTcAddComponent } from './component/sub-tc-add.component';

import { SubTcRoutingModule } from './sub-tc-routing.module';

import { SubTcService } from './sub-tc.service';

@NgModule({
  imports: [
    SubTcRoutingModule,
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
    SubTcsComponent,
    SubTcDetailComponent,
    SubTcAddComponent
  ],
  providers: [ SubTcService ]
})
export class SubTcModule {}
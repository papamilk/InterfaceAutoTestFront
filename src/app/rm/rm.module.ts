import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RMsComponent } from './component/rms.component';
import { RMDetailComponent } from './component/rm-detail.component';

import { RMRoutingModule } from './rm-routing.module';

import { RMService } from './rm.service';

@NgModule({
  imports: [
    RMRoutingModule,
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
    RMsComponent,
    RMDetailComponent
  ],
  providers: [ RMService ]
})
export class RMModule {}
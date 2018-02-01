import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RTCsComponent } from './component/rtcs.component';
import { RTCDetailComponent } from './component/rtc-detail.component';

import { RTCRoutingModule } from './rtc-routing.module';

import { RTCService } from './rtc.service';

@NgModule({
  imports: [
    RTCRoutingModule,
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
    RTCsComponent,
    RTCDetailComponent
  ],
  providers: [ RTCService ]
})
export class RTCModule {}
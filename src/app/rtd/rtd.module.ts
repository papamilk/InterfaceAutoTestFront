import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RTDsComponent } from './component/rtds.component';
import { RTDDetailComponent } from './component/rtd-detail.component';

import { RTDRoutingModule } from './rtd-routing.module';

import { RTDService } from './rtd.service';

@NgModule({
  imports: [
    RTDRoutingModule,
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
    RTDsComponent,
    RTDDetailComponent
  ],
  providers: [ RTDService ]
})
export class RTDModule {}
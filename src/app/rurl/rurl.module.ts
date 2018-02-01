import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RURLsComponent } from './component/rurls.component';
import { RURLDetailComponent } from './component/rurl-detail.component';

import { RURLRoutingModule } from './rurl-routing.module';

import { RURLService } from './rurl.service';

@NgModule({
  imports: [
    RURLRoutingModule,
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
    RURLsComponent,
    RURLDetailComponent
  ],
  providers: [ RURLService ]
})
export class RURLModule {}
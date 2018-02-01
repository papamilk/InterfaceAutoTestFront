import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RSsComponent } from './component/rss.component';
import { RSDetailComponent } from './component/rs-detail.component';

import { RSRoutingModule } from './rs-routing.module';

import { RSService } from './rs.service';

@NgModule({
  imports: [
    RSRoutingModule,
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
    RSsComponent,
    RSDetailComponent
  ],
  providers: [ RSService ]
})
export class RSModule {}
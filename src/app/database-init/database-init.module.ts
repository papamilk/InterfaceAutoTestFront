import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,DropdownModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataBaseInitComponent } from './database-init.component';
import { DataBaseRoutingModule } from './db-routing.module';
import { DatabaseInitService } from './database-init.service';

@NgModule({
  imports: [
    DataBaseRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    GrowlModule
  ],
  declarations: [
    DataBaseInitComponent
  ],
  providers: [ DatabaseInitService ]
})
export class DatabaseInitModule {}
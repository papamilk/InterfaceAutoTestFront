import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule, DropdownModule, ProgressBarModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExecuteComponent } from './execute.component';
import { ExecuteRoutingModule } from './execute-routing.module';
import { ExecuteService } from './execute.service';

@NgModule({
  imports: [
    ExecuteRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ProgressBarModule,
    GrowlModule
  ],
  declarations: [
    ExecuteComponent
  ],
  providers: [ ExecuteService ]
})
export class ExecuteModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule,SharedModule,ButtonModule,DropdownModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SubsComponent } from './component/subs.component';
import { SubDetailComponent } from './component/sub-detail.component';
import { SubAddComponent } from './component/sub-add.component';
import { MainNameComponent } from './component/main-name.component';
import { SubRoutingModule } from './sub-routing.module';

import { SubService } from './sub.service';

@NgModule({
  imports: [
    SubRoutingModule,
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
    SubsComponent,
    SubDetailComponent,
    SubAddComponent,
    MainNameComponent
  ],
  providers: [ SubService ]
})
export class SubModule {}

import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,DropdownModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainsComponent } from './component/mains.component';
import { MainDetailComponent } from './component/main-detail.component';
import { MainAddComponent } from './component/main-add.component';
import { ProNameComponent } from './component/pro-name.component';

import { MainRoutingModule } from './main-routing.module';

import { MainService } from './main.service';

@NgModule({
  imports: [
    MainRoutingModule,
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
    MainsComponent,
    MainDetailComponent,
    MainAddComponent,
    ProNameComponent
  ],
  providers: [ MainService ]
})
export class MainModule {}
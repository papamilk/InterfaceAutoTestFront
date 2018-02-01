import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,DropdownModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DependsComponent } from './component/depends.component';
import { DependDetailComponent } from './component/depend-detail.component';
import { DependAddComponent } from './component/depend-add.component';
import { TdNameComponent } from './component/td-name.component';

import { DependRoutingModule } from './depend-routing.module';

import { DependService } from './depend.service';

@NgModule({
  imports: [
    DependRoutingModule,
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
    DependsComponent,
    DependDetailComponent,
    DependAddComponent,
    TdNameComponent
  ],
  providers: [ DependService ]
})
export class DependModule {}
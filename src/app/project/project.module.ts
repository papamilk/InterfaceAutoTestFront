import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule,ButtonModule,InputTextModule,GrowlModule} from 'primeng/primeng';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './component/projects.component';
import { ProjectDetailComponent } from './component/project-detail.component';
import { ProjectAddComponent } from './component/project-add.component';

import { ProjectRoutingModule } from './project-routing.module';

import { ProjectService } from './project.service';

@NgModule({
  imports: [
    ProjectRoutingModule,
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
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectAddComponent
  ],
  providers: [ ProjectService ]
})
export class ProjectModule {}
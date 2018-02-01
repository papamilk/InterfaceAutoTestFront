import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './component/projects.component';
import { ProjectDetailComponent } from './component/project-detail.component';
import { ProjectAddComponent } from './component/project-add.component';

const projectRoutes: Routes = [
  { path: 'project/detail/:id',  component: ProjectDetailComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/add', component: ProjectAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }



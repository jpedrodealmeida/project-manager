import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsStructureComponent } from './projects-structure.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    ProjectsStructureComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    ProjectsStructureComponent
  ]
})
export class ProjectsStructureModule { }

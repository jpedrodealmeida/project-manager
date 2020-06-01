import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsStructureComponent } from './projects-structure.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ProjectsStructureComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ProjectsStructureComponent
  ]
})
export class ProjectsStructureModule { }

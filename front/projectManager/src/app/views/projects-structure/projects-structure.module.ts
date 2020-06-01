import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsStructureComponent } from './projects-structure.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    ProjectsStructureComponent
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

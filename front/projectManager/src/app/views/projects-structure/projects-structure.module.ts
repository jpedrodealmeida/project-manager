import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsStructureComponent } from './projects-structure.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectsStructureComponent,
    ProjectListComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule
    
  ],
  exports: [
    ProjectsStructureComponent
  ]
})
export class ProjectsStructureModule { }

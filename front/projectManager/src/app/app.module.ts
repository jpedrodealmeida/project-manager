import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsStructureModule } from './views/projects-structure/projects-structure.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsStructureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

interface Project {
  title: string,
  id: number,
  tasks: []
}
@Component({
  selector: 'app-projects-structure',
  templateUrl: './projects-structure.component.html',
  styleUrls: ['./projects-structure.component.scss']
})
export class ProjectsStructureComponent implements OnInit {

  public projects
  public showForm: boolean = false

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    // this.projects = 
    // [
    //   {title: "Angular", id: 0, tasks: ['Create', 'Read', 'Update', 'Delete']},
    //   {title: "React", id: 1, tasks: ['Create', 'Read', 'Update', 'Delete']}
    // ]
    this.getAllProjects()
  }

  private getAllProjects(){
    this._projectService.getProjects().subscribe(projects =>{
      if(projects)
        this.projects = projects
    },error =>{

    })
  }

  public showProjectForm(){
    this.showForm = true;
  }

  public hideProjectForm(){
    this.showForm = false;
  }

}

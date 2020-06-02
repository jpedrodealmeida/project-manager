import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.projects = 
    [
      {title: "Angular", id: 0, tasks: ['Create', 'Read', 'Update', 'Delete']},
      {title: "React", id: 1, tasks: ['Create', 'Read', 'Update', 'Delete']}
    ]
  }

}

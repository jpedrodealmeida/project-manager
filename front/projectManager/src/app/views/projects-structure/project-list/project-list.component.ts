import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input('project') project

  constructor(
     private _projectService: ProjectService,
     private _toastrService: ToastrService) { }

  ngOnInit() {
  }

  public removeButton(id: string){
    this._projectService.deleteProject(id).subscribe(success =>{
      this._toastrService.success('Project deleted successfully')
    },error =>{
      this._toastrService.error(error)
    })
  }

}

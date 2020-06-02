import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/services/project/project.service';
import { ToastrService } from 'ngx-toastr'



@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  @Input('lastId') lastId: number
  @Output() closeForm = new EventEmitter()

  public form: FormGroup

  constructor(
     private _fb: FormBuilder,
     private _projectService: ProjectService,
     private _toastrService: ToastrService
   
     ) { }

  ngOnInit() {
    this.createForm()
    this.getIdToForm()
  }

  getIdToForm(){
    console.log(this.lastId)
    this.form.controls['id'].patchValue(this.lastId)
  }

  public saveButton(){
    let title = this.form.controls['title'].value
    let id = this.form.controls['id'].value
    let project = this.createProjectObjectBeforePost(title, id)
    this.saveProject(project)
  }

  public buttonCancel(){
    this.closeForm.emit()
  }

  private createForm() {
    this.form = this._fb.group({
      title: [null, Validators.compose([Validators.required])],
      id: [{value: null, disabled: true}, Validators.compose([Validators.required])]
    });
  }

  private saveProject(project: object){
    this._projectService.postProject(project).subscribe(success =>{
      this.closeForm.emit(success.projects)
      this._toastrService.success('Project successfully created')
    }, error=>{
      console.log(error.message)
    })

  }

  private createProjectObjectBeforePost(title: string, id: number): object{
    let project = {
      title: title,
      id: id
    }
    return project
  }

}

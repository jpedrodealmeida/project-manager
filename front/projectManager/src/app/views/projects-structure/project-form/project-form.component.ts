import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  @Input('lastId') lastId: number
  @Output() cancelButton = new EventEmitter()

  public form: FormGroup

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
    this.getIdToForm()
  }

  getIdToForm(){
    console.log(this.lastId)
    this.form.controls['id'].patchValue(this.lastId)
  }

  public saveButton(){
    this.form.controls['title'].value
  }

  public buttonCancel(){
    this.cancelButton.emit(true)
  }

  private createForm() {
    this.form = this._fb.group({
      title: [null, Validators.compose([Validators.required])],
      id: [{value: null, disabled: true}, Validators.compose([Validators.required])]
    });
  }

}

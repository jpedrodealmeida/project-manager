import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  @Output() cancelButton = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  public buttonCancel(){
    this.cancelButton.emit(true)
  }

}

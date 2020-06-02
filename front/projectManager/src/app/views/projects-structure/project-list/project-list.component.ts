import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input('project') project

  constructor() { }

  ngOnInit() {
  }

}

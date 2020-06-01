import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsStructureComponent } from './projects-structure.component';

describe('ProjectsStructureComponent', () => {
  let component: ProjectsStructureComponent;
  let fixture: ComponentFixture<ProjectsStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

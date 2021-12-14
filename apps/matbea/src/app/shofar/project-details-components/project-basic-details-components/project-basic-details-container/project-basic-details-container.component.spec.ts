import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBasicDetailsContainerComponent } from './project-basic-details-container.component';

describe('ProjectBasicDetailsContainerComponent', () => {
  let component: ProjectBasicDetailsContainerComponent;
  let fixture: ComponentFixture<ProjectBasicDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBasicDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBasicDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

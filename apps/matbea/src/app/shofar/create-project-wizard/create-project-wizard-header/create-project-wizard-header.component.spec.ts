import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectWizardHeaderComponent } from './create-project-wizard-header.component';

describe('CreateProjectWizardHeaderComponent', () => {
  let component: CreateProjectWizardHeaderComponent;
  let fixture: ComponentFixture<CreateProjectWizardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectWizardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectWizardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

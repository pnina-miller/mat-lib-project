import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectWizardStepperComponent } from './create-project-wizard-stepper.component';

describe('CreateProjectWizardStepperComponent', () => {
  let component: CreateProjectWizardStepperComponent;
  let fixture: ComponentFixture<CreateProjectWizardStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectWizardStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectWizardStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

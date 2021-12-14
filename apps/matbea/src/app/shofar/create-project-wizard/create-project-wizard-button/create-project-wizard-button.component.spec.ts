import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectWizardButtonComponent } from './create-project-wizard-button.component';

describe('CreateProjectWizardButtonComponent', () => {
  let component: CreateProjectWizardButtonComponent;
  let fixture: ComponentFixture<CreateProjectWizardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectWizardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectWizardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

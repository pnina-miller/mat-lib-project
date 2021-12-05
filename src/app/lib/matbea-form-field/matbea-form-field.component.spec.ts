import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaFormFieldComponent } from './matbea-form-field.component';

describe('MatbeaFormFieldComponent', () => {
  let component: MatbeaFormFieldComponent;
  let fixture: ComponentFixture<MatbeaFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

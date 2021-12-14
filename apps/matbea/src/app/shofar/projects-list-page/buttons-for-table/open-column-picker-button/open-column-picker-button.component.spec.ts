import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenColumnPickerButtonComponent } from './open-column-picker-button.component';

describe('OpenColumnPickerButtonComponent', () => {
  let component: OpenColumnPickerButtonComponent;
  let fixture: ComponentFixture<OpenColumnPickerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenColumnPickerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenColumnPickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

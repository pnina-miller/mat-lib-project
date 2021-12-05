import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonTabComponent } from './radio-button-tab.component';

describe('RadioButtonTabComponent', () => {
  let component: RadioButtonTabComponent;
  let fixture: ComponentFixture<RadioButtonTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

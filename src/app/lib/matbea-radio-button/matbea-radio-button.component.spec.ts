import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaRadioButtonComponent } from './matbea-radio-button.component';

describe('MatbeaRadioButtonComponent', () => {
  let component: MatbeaRadioButtonComponent;
  let fixture: ComponentFixture<MatbeaRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

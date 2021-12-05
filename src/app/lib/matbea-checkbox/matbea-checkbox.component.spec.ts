import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaCheckboxComponent } from './matbea-checkbox.component';

describe('MatbeaCheckboxComponent', () => {
  let component: MatbeaCheckboxComponent;
  let fixture: ComponentFixture<MatbeaCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

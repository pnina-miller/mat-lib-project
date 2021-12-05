import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaInputComponent } from './matbea-input.component';

describe('MatbeaInputComponent', () => {
  let component: MatbeaInputComponent;
  let fixture: ComponentFixture<MatbeaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

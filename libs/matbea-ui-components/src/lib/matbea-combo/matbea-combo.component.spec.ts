import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaComboComponent } from './matbea-combo.component';

describe('MatbeaComboComponent', () => {
  let component: MatbeaComboComponent;
  let fixture: ComponentFixture<MatbeaComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

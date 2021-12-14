import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaSectorComboComponent } from './matbea-sector-combo.component';

describe('MatbeaSectorComboComponent', () => {
  let component: MatbeaSectorComboComponent;
  let fixture: ComponentFixture<MatbeaSectorComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaSectorComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaSectorComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

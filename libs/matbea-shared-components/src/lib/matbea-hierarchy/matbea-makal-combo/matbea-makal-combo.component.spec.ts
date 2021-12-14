import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaMakalComboComponent } from './matbea-makal-combo.component';

describe('MatbeaMakalComboComponent', () => {
  let component: MatbeaMakalComboComponent;
  let fixture: ComponentFixture<MatbeaMakalComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaMakalComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaMakalComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

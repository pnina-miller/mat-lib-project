import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaAgafComboComponent } from './matbea-agaf-combo.component';

describe('MatbeaAgafComboComponent', () => {
  let component: MatbeaAgafComboComponent;
  let fixture: ComponentFixture<MatbeaAgafComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaAgafComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaAgafComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaChativaComboComponent } from './matbea-chativa-combo.component';

describe('MatbeaChativaComboComponent', () => {
  let component: MatbeaChativaComboComponent;
  let fixture: ComponentFixture<MatbeaChativaComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaChativaComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaChativaComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

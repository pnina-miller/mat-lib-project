import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaHierarchyGeneralComboComponent } from './matbea-hierarchy-general-combo.component';

describe('MatbeaHierarchyGeneralComboComponent', () => {
  let component: MatbeaHierarchyGeneralComboComponent;
  let fixture: ComponentFixture<MatbeaHierarchyGeneralComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaHierarchyGeneralComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaHierarchyGeneralComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

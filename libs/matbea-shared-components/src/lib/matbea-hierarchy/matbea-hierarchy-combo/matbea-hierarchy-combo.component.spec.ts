import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaHierarchyComboComponent } from './matbea-hierarchy-combo.component';

describe('MatbeaHierarchyComponent', () => {
  let component: MatbeaHierarchyComboComponent;
  let fixture: ComponentFixture<MatbeaHierarchyComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaHierarchyComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaHierarchyComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

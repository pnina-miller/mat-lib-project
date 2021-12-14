import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaHierarchyComponent } from './matbea-hierarchy.component';

describe('MatbeaHierarchyComponent', () => {
  let component: MatbeaHierarchyComponent;
  let fixture: ComponentFixture<MatbeaHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

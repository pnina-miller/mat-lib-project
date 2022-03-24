import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaTableHeaderCellComponent } from './matbea-table-header-cell.component';

describe('MatbeaTableHeaderCellComponent', () => {
  let component: MatbeaTableHeaderCellComponent;
  let fixture: ComponentFixture<MatbeaTableHeaderCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaTableHeaderCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaTableHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

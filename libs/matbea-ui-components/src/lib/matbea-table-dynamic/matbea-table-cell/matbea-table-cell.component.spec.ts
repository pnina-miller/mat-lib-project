import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaTableCellComponent } from './matbea-table-cell.component';

describe('MatbeaTableCellComponent', () => {
  let component: MatbeaTableCellComponent;
  let fixture: ComponentFixture<MatbeaTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaTableCellContainerComponent } from './matbea-table-cell-container.component';

describe('MatbeaTableCellContainerComponent', () => {
  let component: MatbeaTableCellContainerComponent;
  let fixture: ComponentFixture<MatbeaTableCellContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaTableCellContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaTableCellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

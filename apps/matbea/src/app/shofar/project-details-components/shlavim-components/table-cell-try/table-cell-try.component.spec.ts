import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellTryComponent } from './table-cell-try.component';

describe('TableCellTryComponent', () => {
  let component: TableCellTryComponent;
  let fixture: ComponentFixture<TableCellTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCellTryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

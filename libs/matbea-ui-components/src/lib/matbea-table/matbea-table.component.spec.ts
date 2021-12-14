import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaTableComponent } from './matbea-table.component';

describe('MatbeaTableComponent', () => {
  let component: MatbeaTableComponent;
  let fixture: ComponentFixture<MatbeaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

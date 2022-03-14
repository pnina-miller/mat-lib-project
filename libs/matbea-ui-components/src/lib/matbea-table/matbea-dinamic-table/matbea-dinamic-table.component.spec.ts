import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaDinamicTableComponent } from './matbea-dinamic-table.component';

describe('MatbeaDinamicTableComponent', () => {
  let component: MatbeaDinamicTableComponent;
  let fixture: ComponentFixture<MatbeaDinamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaDinamicTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaDinamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

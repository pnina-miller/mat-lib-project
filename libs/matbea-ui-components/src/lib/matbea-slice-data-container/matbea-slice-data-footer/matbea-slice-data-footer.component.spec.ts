import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaSliceDataFooterComponent } from './matbea-slice-data-footer.component';

describe('MatbeaSliceDataFooterComponent', () => {
  let component: MatbeaSliceDataFooterComponent;
  let fixture: ComponentFixture<MatbeaSliceDataFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaSliceDataFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaSliceDataFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

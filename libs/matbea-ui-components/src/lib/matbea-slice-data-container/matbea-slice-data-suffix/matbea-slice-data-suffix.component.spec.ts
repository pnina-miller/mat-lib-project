import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaSliceDataSuffixComponent } from './matbea-slice-data-suffix.component';

describe('MatbeaSliceDataSuffixComponent', () => {
  let component: MatbeaSliceDataSuffixComponent;
  let fixture: ComponentFixture<MatbeaSliceDataSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaSliceDataSuffixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaSliceDataSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

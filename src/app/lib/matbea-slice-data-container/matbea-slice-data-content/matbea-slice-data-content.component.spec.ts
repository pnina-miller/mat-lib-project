import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaSliceDataContentComponent } from './matbea-slice-data-content.component';

describe('MatbeaSliceDataContentComponent', () => {
  let component: MatbeaSliceDataContentComponent;
  let fixture: ComponentFixture<MatbeaSliceDataContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaSliceDataContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaSliceDataContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

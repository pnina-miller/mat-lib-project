import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaSliceDataContainerComponent } from './matbea-slice-data-container.component';

describe('MatbeaCardDetailsComponent', () => {
  let component: MatbeaSliceDataContainerComponent;
  let fixture: ComponentFixture<MatbeaSliceDataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaSliceDataContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaSliceDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

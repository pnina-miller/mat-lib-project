import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaDetailsSteperComponent } from './matbea-details-steper.component';

describe('MatbeaDetailsSteperComponent', () => {
  let component: MatbeaDetailsSteperComponent;
  let fixture: ComponentFixture<MatbeaDetailsSteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaDetailsSteperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaDetailsSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

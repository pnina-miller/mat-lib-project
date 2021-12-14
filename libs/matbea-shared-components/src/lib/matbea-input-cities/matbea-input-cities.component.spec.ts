import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaInputCitiesComponent } from './matbea-input-cities.component';

describe('MatbeaInputCitiesComponent', () => {
  let component: MatbeaInputCitiesComponent;
  let fixture: ComponentFixture<MatbeaInputCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaInputCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaInputCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

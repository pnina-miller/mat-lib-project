import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaButtonToggleComponent } from './matbea-button-toggle.component';

describe('MatbeaButtonToggleComponent', () => {
  let component: MatbeaButtonToggleComponent;
  let fixture: ComponentFixture<MatbeaButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaButtonToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

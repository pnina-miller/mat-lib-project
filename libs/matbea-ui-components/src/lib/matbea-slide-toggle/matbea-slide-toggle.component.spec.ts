import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaSlideToggleComponent } from './matbea-slide-toggle.component';

describe('MatbeaSlideToggleComponent', () => {
  let component: MatbeaSlideToggleComponent;
  let fixture: ComponentFixture<MatbeaSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaSlideToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

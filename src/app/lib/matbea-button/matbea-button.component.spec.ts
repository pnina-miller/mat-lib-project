import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaButtonComponent } from './matbea-button.component';

describe('MatbeaButtonComponent', () => {
  let component: MatbeaButtonComponent;
  let fixture: ComponentFixture<MatbeaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

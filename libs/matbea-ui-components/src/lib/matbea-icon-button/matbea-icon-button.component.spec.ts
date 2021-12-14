import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaIconButtonComponent } from './matbea-icon-button.component';

describe('MatbeaIconButtonComponent', () => {
  let component: MatbeaIconButtonComponent;
  let fixture: ComponentFixture<MatbeaIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaIconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

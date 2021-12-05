import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaIconComponent } from './matbea-icon.component';

describe('MatbeaIconComponent', () => {
  let component: MatbeaIconComponent;
  let fixture: ComponentFixture<MatbeaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

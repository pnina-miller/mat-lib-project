import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaLebelComponent } from './matbea-lebel.component';

describe('MatbeaLebelComponent', () => {
  let component: MatbeaLebelComponent;
  let fixture: ComponentFixture<MatbeaLebelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaLebelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaLebelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

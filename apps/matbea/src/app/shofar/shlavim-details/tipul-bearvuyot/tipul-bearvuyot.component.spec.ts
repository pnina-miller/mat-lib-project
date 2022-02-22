import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipulBearvuyotComponent } from './tipul-bearvuyot.component';

describe('TipulBearvuyotComponent', () => {
  let component: TipulBearvuyotComponent;
  let fixture: ComponentFixture<TipulBearvuyotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipulBearvuyotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipulBearvuyotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

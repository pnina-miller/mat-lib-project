import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudutestComponent } from './dudutest.component';

describe('DudutestComponent', () => {
  let component: DudutestComponent;
  let fixture: ComponentFixture<DudutestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DudutestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DudutestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

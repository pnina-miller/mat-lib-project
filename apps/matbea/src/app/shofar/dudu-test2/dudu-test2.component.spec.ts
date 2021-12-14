import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuduTest2Component } from './dudu-test2.component';

describe('DuduTest2Component', () => {
  let component: DuduTest2Component;
  let fixture: ComponentFixture<DuduTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuduTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuduTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

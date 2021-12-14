import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragPageComponent } from './drag-page.component';

describe('DragPageComponent', () => {
  let component: DragPageComponent;
  let fixture: ComponentFixture<DragPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShlavimContainerComponent } from './shlavim-container.component';

describe('ShlavimContainerComponent', () => {
  let component: ShlavimContainerComponent;
  let fixture: ComponentFixture<ShlavimContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShlavimContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShlavimContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

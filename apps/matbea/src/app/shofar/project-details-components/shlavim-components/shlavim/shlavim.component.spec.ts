import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShlavimComponent } from './shlavim.component';

describe('ShlavimComponent', () => {
  let component: ShlavimComponent;
  let fixture: ComponentFixture<ShlavimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShlavimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShlavimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

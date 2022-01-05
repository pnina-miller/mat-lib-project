import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShlavimDetailsComponent } from './shlavim-details.component';

describe('ShlavimDetailsComponent', () => {
  let component: ShlavimDetailsComponent;
  let fixture: ComponentFixture<ShlavimDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShlavimDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShlavimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

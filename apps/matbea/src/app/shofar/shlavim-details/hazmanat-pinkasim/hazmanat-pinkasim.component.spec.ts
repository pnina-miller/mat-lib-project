import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazmanatPinkasimComponent } from './hazmanat-pinkasim.component';

describe('HazmanatPinkasimComponent', () => {
  let component: HazmanatPinkasimComponent;
  let fixture: ComponentFixture<HazmanatPinkasimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazmanatPinkasimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazmanatPinkasimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipusLefiPerteyProjectComponent } from './hipus-lefi-pertey-project.component';

describe('HipusLefiPerteyProjectComponent', () => {
  let component: HipusLefiPerteyProjectComponent;
  let fixture: ComponentFixture<HipusLefiPerteyProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipusLefiPerteyProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipusLefiPerteyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

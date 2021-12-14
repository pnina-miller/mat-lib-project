import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosafatCheshbonComponent } from './hosafat-cheshbon.component';

describe('HosafatCheshbonComponent', () => {
  let component: HosafatCheshbonComponent;
  let fixture: ComponentFixture<HosafatCheshbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosafatCheshbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosafatCheshbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosafatYechidaComponent } from './hosafat-yechida.component';

describe('HosafatYechidaComponent', () => {
  let component: HosafatYechidaComponent;
  let fixture: ComponentFixture<HosafatYechidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosafatYechidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosafatYechidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

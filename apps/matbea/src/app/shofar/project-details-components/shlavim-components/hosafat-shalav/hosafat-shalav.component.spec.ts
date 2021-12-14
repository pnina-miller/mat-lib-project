import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosafatShalavComponent } from './hosafat-shalav.component';

describe('HosafatShalavComponent', () => {
  let component: HosafatShalavComponent;
  let fixture: ComponentFixture<HosafatShalavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosafatShalavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosafatShalavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

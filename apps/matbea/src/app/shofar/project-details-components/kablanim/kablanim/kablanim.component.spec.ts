import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KablanimComponent } from './kablanim.component';

describe('KablanimComponent', () => {
  let component: KablanimComponent;
  let fixture: ComponentFixture<KablanimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KablanimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KablanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

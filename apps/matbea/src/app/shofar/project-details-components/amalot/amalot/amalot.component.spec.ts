import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmalotComponent } from './amalot.component';

describe('AmalotComponent', () => {
  let component: AmalotComponent;
  let fixture: ComponentFixture<AmalotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmalotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmalotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

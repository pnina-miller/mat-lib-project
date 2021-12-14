import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KablanimContainerComponent } from './kablanim-container.component';

describe('KablanimContainerComponent', () => {
  let component: KablanimContainerComponent;
  let fixture: ComponentFixture<KablanimContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KablanimContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KablanimContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

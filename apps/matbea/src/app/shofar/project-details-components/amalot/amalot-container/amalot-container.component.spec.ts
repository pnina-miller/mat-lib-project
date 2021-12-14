import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmalotContainerComponent } from './amalot-container.component';

describe('AmalotContainerComponent', () => {
  let component: AmalotContainerComponent;
  let fixture: ComponentFixture<AmalotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmalotContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmalotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

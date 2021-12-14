import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmalotViewComponent } from './amalot-view.component';

describe('AmalotViewComponent', () => {
  let component: AmalotViewComponent;
  let fixture: ComponentFixture<AmalotViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmalotViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmalotViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

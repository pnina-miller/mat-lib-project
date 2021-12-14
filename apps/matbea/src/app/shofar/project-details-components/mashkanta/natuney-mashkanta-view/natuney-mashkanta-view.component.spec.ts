import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatuneyMashkantaViewComponent } from './natuney-mashkanta-view.component';

describe('NatuneyMashkantaViewComponent', () => {
  let component: NatuneyMashkantaViewComponent;
  let fixture: ComponentFixture<NatuneyMashkantaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatuneyMashkantaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatuneyMashkantaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

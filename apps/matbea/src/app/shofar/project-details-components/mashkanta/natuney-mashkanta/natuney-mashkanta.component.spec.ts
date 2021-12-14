import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatuneyMashkantaComponent } from './natuney-mashkanta.component';

describe('NatuneyMashkantaComponent', () => {
  let component: NatuneyMashkantaComponent;
  let fixture: ComponentFixture<NatuneyMashkantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatuneyMashkantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatuneyMashkantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

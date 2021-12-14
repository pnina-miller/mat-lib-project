import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatuneyMashkantaEditComponent } from './natuney-mashkanta-edit.component';

describe('NatuneyMashkantaEditComponent', () => {
  let component: NatuneyMashkantaEditComponent;
  let fixture: ComponentFixture<NatuneyMashkantaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatuneyMashkantaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatuneyMashkantaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

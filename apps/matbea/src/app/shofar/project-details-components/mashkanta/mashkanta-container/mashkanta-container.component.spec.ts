import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MashkantaContainerComponent } from './mashkanta-container.component';

describe('MashkantaContainerComponent', () => {
  let component: MashkantaContainerComponent;
  let fixture: ComponentFixture<MashkantaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MashkantaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MashkantaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetuneyAmalotComponent } from './netuney-amalot.component';

describe('NetuneyAmalotComponent', () => {
  let component: NetuneyAmalotComponent;
  let fixture: ComponentFixture<NetuneyAmalotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetuneyAmalotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetuneyAmalotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

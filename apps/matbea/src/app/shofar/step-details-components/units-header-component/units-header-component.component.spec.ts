import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsHeaderComponentComponent } from './units-header-component.component';

describe('UnitsHeaderComponentComponent', () => {
  let component: UnitsHeaderComponentComponent;
  let fixture: ComponentFixture<UnitsHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

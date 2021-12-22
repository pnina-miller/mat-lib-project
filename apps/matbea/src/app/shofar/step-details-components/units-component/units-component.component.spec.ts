import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsComponentComponent } from './units-component.component';

describe('UnitsComponentComponent', () => {
  let component: UnitsComponentComponent;
  let fixture: ComponentFixture<UnitsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

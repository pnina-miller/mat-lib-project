import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YechidotComponent } from './yechidot.component';

describe('UnitsComponent', () => {
  let component: YechidotComponent;
  let fixture: ComponentFixture<YechidotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YechidotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YechidotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

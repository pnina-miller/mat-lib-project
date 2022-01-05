import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YechidotHeaderComponent } from './yechidot-header.component';

describe('YechidotHeaderComponentComponent', () => {
  let component: YechidotHeaderComponent;
  let fixture: ComponentFixture<YechidotHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YechidotHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YechidotHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

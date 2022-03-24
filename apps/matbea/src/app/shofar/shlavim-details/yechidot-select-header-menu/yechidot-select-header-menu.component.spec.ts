import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YechidotSelectHeaderMenuComponent } from './yechidot-select-header-menu.component';

describe('YechidotSelectHeaderMenuComponent', () => {
  let component: YechidotSelectHeaderMenuComponent;
  let fixture: ComponentFixture<YechidotSelectHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YechidotSelectHeaderMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YechidotSelectHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

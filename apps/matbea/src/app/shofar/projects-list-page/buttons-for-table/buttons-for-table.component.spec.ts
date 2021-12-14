import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsForTableComponent } from './buttons-for-table.component';

describe('ButtonsForTableComponent', () => {
  let component: ButtonsForTableComponent;
  let fixture: ComponentFixture<ButtonsForTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsForTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsForTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterChipsWrapperComponent } from './filter-chips-wrapper.component';

describe('FilterChipsWrapperComponent', () => {
  let component: FilterChipsWrapperComponent;
  let fixture: ComponentFixture<FilterChipsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterChipsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterChipsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheshbonotComponent } from './cheshbonot.component';

describe('CheshbonotComponent', () => {
  let component: CheshbonotComponent;
  let fixture: ComponentFixture<CheshbonotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheshbonotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheshbonotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

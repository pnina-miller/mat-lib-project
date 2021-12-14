import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheshbonotContainerComponent } from './cheshbonot-container.component';

describe('CheshbonotContainerComponent', () => {
  let component: CheshbonotContainerComponent;
  let fixture: ComponentFixture<CheshbonotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheshbonotContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheshbonotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

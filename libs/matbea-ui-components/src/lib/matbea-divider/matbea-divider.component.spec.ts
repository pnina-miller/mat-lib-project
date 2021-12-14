import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaDividerComponent } from './matbea-divider.component';

describe('MatbeaDividerComponent', () => {
  let component: MatbeaDividerComponent;
  let fixture: ComponentFixture<MatbeaDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

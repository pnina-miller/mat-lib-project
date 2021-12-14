import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboStatusProjectComponent } from './combo-status-project.component';

describe('ComboStatusProjectComponent', () => {
  let component: ComboStatusProjectComponent;
  let fixture: ComponentFixture<ComboStatusProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboStatusProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboStatusProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

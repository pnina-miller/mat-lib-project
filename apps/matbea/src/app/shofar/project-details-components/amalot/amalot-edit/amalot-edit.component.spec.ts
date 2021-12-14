import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmalotEditComponent } from './amalot-edit.component';

describe('AmalotEditComponent', () => {
  let component: AmalotEditComponent;
  let fixture: ComponentFixture<AmalotEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmalotEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmalotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

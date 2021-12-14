import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetKodMutavComponent } from './get-kod-mutav.component';

describe('GetKodMutavComponent', () => {
  let component: GetKodMutavComponent;
  let fixture: ComponentFixture<GetKodMutavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetKodMutavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetKodMutavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikumVeKarkaComponent } from './mikum-ve-karka.component';

describe('MikumVeKarkaComponent', () => {
  let component: MikumVeKarkaComponent;
  let fixture: ComponentFixture<MikumVeKarkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MikumVeKarkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MikumVeKarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArichatShalavMenuComponent } from './arichat-shalav-menu.component';

describe('ArichatShalavMenuComponent', () => {
  let component: ArichatShalavMenuComponent;
  let fixture: ComponentFixture<ArichatShalavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArichatShalavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArichatShalavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

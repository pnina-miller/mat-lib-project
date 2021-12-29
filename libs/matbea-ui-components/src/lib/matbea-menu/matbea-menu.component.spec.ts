import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaMenuComponent } from './matbea-menu.component';

describe('MatbeaMenuComponent', () => {
  let component: MatbeaMenuComponent;
  let fixture: ComponentFixture<MatbeaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaSearchTypeComponent } from './matbea-search-type.component';

describe('MatbeaSearchTypeComponent', () => {
  let component: MatbeaSearchTypeComponent;
  let fixture: ComponentFixture<MatbeaSearchTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaSearchTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaSearchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

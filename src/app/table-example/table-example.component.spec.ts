import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tableExampleComponent } from './table-example.component';

describe('tableExampleComponent', () => {
  let component: tableExampleComponent;
  let fixture: ComponentFixture<tableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tableExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

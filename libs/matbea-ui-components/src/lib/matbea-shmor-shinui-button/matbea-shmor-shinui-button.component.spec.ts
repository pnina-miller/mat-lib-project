import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbeaShmorShinuiButtonComponent } from './matbea-shmor-shinui-button.component';

describe('MatbeaShmorShinuiButtonComponent', () => {
  let component: MatbeaShmorShinuiButtonComponent;
  let fixture: ComponentFixture<MatbeaShmorShinuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaShmorShinuiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaShmorShinuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

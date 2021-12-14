import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatbeaColumnsDragComponent } from './matbea-columns-drag.component';


describe('MatbeaColumnsDragComponent', () => {
  let component: MatbeaColumnsDragComponent;
  let fixture: ComponentFixture<MatbeaColumnsDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbeaColumnsDragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaColumnsDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

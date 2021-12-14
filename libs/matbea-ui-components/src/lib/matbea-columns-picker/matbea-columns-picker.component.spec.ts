import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatbeaColumnsPickerComponent } from './matbea-columns-picker.component';


describe('MatbeaColumnsPickerComponent ', () => {
  let component: MatbeaColumnsPickerComponent ;
  let fixture: ComponentFixture<MatbeaColumnsPickerComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatbeaColumnsPickerComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbeaColumnsPickerComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

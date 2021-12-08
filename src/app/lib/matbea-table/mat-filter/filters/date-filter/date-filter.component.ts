
@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss'],
})
export class DateFilterComponent implements OnInit {
  @Input() filterColumn: DateFilterColumn | undefined;
  filterValue: string='mm/dd/yyy' //= new Date();
  filterValue2: string='mm/dd/yyy'  //= new Date();
  methodOptions = this.dateFilterColumn.methodOptions;
  optionsArr = Object.entries(this.methodOptions).map((option:any[])=>({ id: option[0], value: option[1].name}));

  selectedMethod: string = this.optionsArr[0][0] || 'in';
  inputFocused:number=0
  inputFormControl=new FormControl();
  convertDate(date: Date) {
    return date?.toLocaleDateString().replace(/\./g, '/');
  }
  constructor(private filterService: MatTableService,private elementRef: ElementRef, private dateFilterColumn:DateFilterColumn,private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  dateSelected(e: Date) {
    this.inputFormControl.setValue(this.convertDate(e))

       this.filterValue && this.colorSelected(new Date(this.filterValue),'white')
       this.colorSelected(e,'red')
        this.filterValue = this.convertDate(e);
   }
   dateSelected2(e: Date) {
 this.filterValue2 && this.colorSelected(new Date(this.filterValue2),'white')
       this.colorSelected(e,'red')
       this.filterValue2 =  this.convertDate(e);

   }
colorSelected(date:Date,color:string){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const stringDate=`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
   let el:any=document.querySelector(`.mat-calendar-body-cell[aria-label= "${stringDate}" ] .mat-calendar-body-cell-content`)
    if(el) el.style.backgroundColor=color;
    this.elementRef.nativeElement.style.setProperty('selectors', 'e');
}
  saveFilter() {
    let stringFilterValue = `${
      this.dateFilterColumn.methodOptions[this.selectedMethod].name
    } ${this.filterValue} ${this.filterValue2 ? '-'+this.filterValue2 : ''}`;
    this.filterService.setFilter(
      new DateFilterColumn({
        ...this.filterColumn,
        stringFilterValue,
        filterMethodKey: this.selectedMethod,
        filterValue: this.filterValue,
        secondValueForRange: this.filterValue2,
      })
    );
  }
}

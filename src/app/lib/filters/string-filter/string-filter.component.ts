import { Component, Input, OnInit } from '@angular/core';
import { MatTableService } from 'src/app/services/mat-table.service';
import { StringFilterColumn } from 'src/app/models/filterColumns';

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {

  constructor(private filterService:MatTableService) { }


  @Input() filterColumn!: StringFilterColumn;
  selectedMethod:string=''
  filterValue=''

  ngOnInit(): void {
  }

  onKeyUp(e: any){
    this.filterValue=e.target.value
  }

  saveFilter(){
    let stringFilterValue=`${this.selectedMethod} ${this.filterValue} `;
        this.filterService.setFilter(new StringFilterColumn({...this.filterColumn, filterValue:this.filterValue, filterMethod:this.selectedMethod, stringFilterValue}));

  }

}

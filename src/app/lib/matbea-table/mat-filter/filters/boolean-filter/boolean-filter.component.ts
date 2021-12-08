import { Component, Input, OnInit } from '@angular/core';
import { FilterColumn, SelectFilterColumn } from 'src/app/lib/matbea-table/models/filterColumns';
import { MatTableService } from 'src/app/lib/matbea-table/services/mat-table.service';

@Component({
  selector: 'app-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.scss']
})
export class BooleanFilterComponent implements OnInit {

  @Input() filterColumn!: BooleanFilterColumn;
  filterValue:string | undefined
  

  constructor(private filterService:MatTableService) { }

  ngOnInit(): void {
  }

onChange(value: any){
  this.filterValue=value;
}

saveFilter(){debugger
  const stringFilterValue=this.filterValue?'כן':'לא'
  this.filterService.setFilter(new BooleanFilterColumn({...this.filterColumn,stringFilterValue:stringFilterValue,filterValue:this.filterValue, booleanValue:this.filterValue}));
}
}

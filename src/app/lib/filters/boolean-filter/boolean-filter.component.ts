import { Component, Input, OnInit } from '@angular/core';
import { FilterColumn, SelectFilterColumn } from 'src/app/models/filterColumns';
import { MatTableService } from 'src/app/services/mat-table.service';

@Component({
  selector: 'app-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.scss']
})
export class BooleanFilterComponent implements OnInit {

  @Input() filterColumn!: SelectFilterColumn;
  stringFilterValue:boolean | undefined
  
  constructor(private filterService:MatTableService) { }

  ngOnInit(): void {
  }

onChange(e: any){debugger
  this.stringFilterValue=e.value;
}

saveFilter(){
  this.filterService.setFilter(new FilterColumn({...this.filterColumn,stringFilterValue:this.stringFilterValue,filterValue:this.stringFilterValue}))
}
}
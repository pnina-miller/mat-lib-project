import { Component, Input, OnInit } from '@angular/core';
import { BooleanFilterColumn, FilterColumn, SelectFilterColumn } from "../../../models/filterColumns";
import { MatTableService } from "../../../services/mat-table.service";

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

saveFilter(){
  const stringFilterValue=this.filterValue?'כן':'לא'
  this.filterService.setFilter(new BooleanFilterColumn({...this.filterColumn,stringFilterValue:stringFilterValue,filterValue:this.filterValue, booleanValue:this.filterValue}));
}
}
import { Component, Input, OnInit } from '@angular/core';
import { FilterColumn, SelectFilterColumn } from 'src/app/lib/matbea-table/models/filterColumns';
import { MatTableService } from 'src/app/lib/matbea-table/services/mat-table.service';

@Component({
  selector: 'app-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.scss']
})
export class BooleanFilterComponent implements OnInit {

  @Input() filterColumn!: SelectFilterColumn;
  filterValue:string | undefined
  
  constructor(private filterService:MatTableService) { }

  ngOnInit(): void {
  }

onChange(e: any){
  this.filterValue=e.value;
}

saveFilter(){
  const stringFilterValue=this.filterValue==='true'?'כן':'לא'
  this.filterService.setFilter(new FilterColumn({...this.filterColumn,stringFilterValue:stringFilterValue,filterValue:this.filterValue}))
}
}
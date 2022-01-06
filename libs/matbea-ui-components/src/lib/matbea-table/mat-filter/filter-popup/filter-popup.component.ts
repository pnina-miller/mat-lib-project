import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SelectFilterComponent } from '../filters/select-filter/select-filter.component';
import { StringFilterComponent } from '../filters/string-filter/string-filter.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilterColumn } from '../../../matbea-table/models/filterColumns';
import { MatTableService } from '../../../matbea-table/services/mat-table.service';

interface DataType {
  trigger: ElementRef;
  updateFilters: Function;
  position:string;
}

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.scss'],
})
export class FilterPopupComponent implements OnInit {
  
  selectedFilterColumn: any | undefined;;
  columns!: Array<FilterColumn>;
  displayedColumns!: Array<FilterColumn>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    public dialModalRef: MatDialogRef<FilterPopupComponent>,
    private matTableService: MatTableService
  ) {}

  ngOnInit(): void {
    const rect = this.data.trigger.nativeElement.getBoundingClientRect();
    
    // if(this.data.position=='right')
    this.dialModalRef.updatePosition({
      top: `${rect.top + rect.height}px`,
      left: `${rect.left}px`,
    });

    this.matTableService.columnDefinitions.subscribe(
      (data) => {this.columns = data; this.displayedColumns=data}
    );
  }

  goBack() {
    this.displayedColumns=this.columns
    this.selectedFilterColumn = undefined;
  }

  onKeyUp(value: any) {
    let filteresArr=this.columns.filter( col => col.columnnamehebrew?.toLocaleLowerCase().includes(value.toLocaleLowerCase()) );
    this.displayedColumns=filteresArr;
    }

  fieldSelected(ordernumber: string) {
    this.selectedFilterColumn = this.columns.find(
      (col) => col.ordernumber === ordernumber
    );
  }

  @ViewChild('filterComponent') filterComponent!: StringFilterComponent | SelectFilterComponent

  filterTypes={
  date:'DATE',
  string:'String',
  boolean:'BOOLEAN',
  multiSelect:'MULTISELECT',
  numeric: 'NUMERIC',
  select: 'SELECT'
  }


  back() {
    this.goBack()
  }

  seveClick() {
    this.filterComponent.saveFilter();
  }

}
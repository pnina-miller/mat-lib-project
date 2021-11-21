import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ChangeDetectorRef,
  Input,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { SelectFilterComponent } from '../filters/select-filter/select-filter.component';
import { StringFilterComponent } from '../filters/string-filter/string-filter.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilterColumn } from '../../models/filterColumns';
import { MatTableService } from '../../services/mat-table.service';

interface DataType {
  trigger: ElementRef;
  updateFilters: Function;
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
    private changeDetector: ChangeDetectorRef,
    private matTableService: MatTableService
  ) {}

  ngOnInit(): void {
    const rect = this.data.trigger.nativeElement.getBoundingClientRect();
    this.dialModalRef.updatePosition({
      top: `${rect.top + rect.height}px`,
      left: `${rect.left}px`,
    });

    this.matTableService.columnDefinitions.subscribe(
      (data) => {this.columns = data; this.displayedColumns=data}
    );
  }

  goBack() {
    this.selectedFilterColumn = undefined;
  }

  onKeyUp(e: any) {
    let filteresArr=this.columns.filter( col => col.columnnamehebrew?.includes(e.target.value) );

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

  filterSelectSymbol = []


  back() {
    this.goBack()
  }

  seveClick() {
    this.filterComponent.saveFilter();
  }

}
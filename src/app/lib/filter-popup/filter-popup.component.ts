import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit, Input, Inject, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IfilterValues } from '../../table.inteface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilterColumn } from '../../models/filterColumns';
import * as columnDefination from '../../../assets/data/tableColumns.json'

export interface DialogData {
  trigger: ElementRef
  dataSource: MatTableDataSource<any>,
  columns: IfilterValues,
}

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.scss']
})
export class FilterPopupComponent implements OnInit {


  dataSource!: MatTableDataSource<any>;

  filterValues!: IfilterValues;
  filterSelectSymbol!: string[];

  filterField: string = '';
  filterColumn: FilterColumn | undefined;
  displayedColumns: Array<FilterColumn> = Object.values(columnDefination);

  constructor(private _liveAnnouncer: LiveAnnouncer,
    private _filteringService: FilteringService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialModalRef: MatDialogRef<any>,
    private changeDetector: ChangeDetectorRef,
  ) { }
  ngOnInit(): void {
    const rect = this.data.trigger.nativeElement.getBoundingClientRect();

    this.dialModalRef.updatePosition({ top: `${rect.top + rect.height}px`, left: `${rect.left}px` })
    this.dataSource = this.data.dataSource
    this.dataSource.filterPredicate = this.createFilter();
    this.filterValues = this.data.columns
    this.filterSelectSymbol = this.data.columns?.symbol.options;
  }

  goBack() {
    this.filterColumn = undefined;
  }

  onKeyUp(e: any) {
    this.displayedColumns = Object.values(columnDefination).filter(col => col.columnnamehebrew?.includes(e.target.value))
    this.changeDetector.detectChanges();

  }

  getFilterObject(fullObj: any[], key: string) {
    const uniqChk: any[] = [];
    fullObj.filter((obj: { [x: string]: any; }) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  onfilterChange(columnProp: string, event: any) {
    this.filterValues[columnProp].value = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }
  onCheckBoxfilterChange(columnProp: string, event: any) {
    this.filterValues[columnProp].value = event.checked
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  createFilter() {
    let filterFunction = (data: any, filter: string): boolean => {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].value.toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      let found = false;
      if (isFilterSet) {
        for (const col in searchTerms) {
          //TO-DO enable multiple filters
          found = this._filteringService.check(searchTerms[col].checkMethod, data[col], searchTerms[col].value);
        }
        return found
      } else {
        return true;
      }
    }
    return filterFunction
  }

  resetFilters() {
    this.dataSource.filter = "";
  }

  fieldSelected(ordernumber: string) {
    this.filterColumn = this.displayedColumns.find(col => col.ordernumber === ordernumber)
  }

}


class FilteringService {
  
  public check(checkMethod: string, data: string, value: string) {
    return this[checkMethod](checkMethod, data, value)
  }

  [key: string]: (checkMethod: string, data: string, value: string) => boolean

  public booleanCheck(checkMethod: string, data: string, value: string): boolean {
    return JSON.parse(data)==JSON.parse(value);
  }

  public stringIncludeCheck(checkMethod: string, data: string, value: string): boolean {
    let found = false
    value.trim().toLowerCase().split(' ').forEach((word: any) => {
      if (data.toString().toLowerCase().indexOf(word) != -1) {
        found = true
      }
    });
    return found
  }

  public exactMatchCheck(checkMethod: string, data: string, value: string): boolean {
    return data == value
  }
}
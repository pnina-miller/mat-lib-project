import { Component, OnInit, Inject, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilterColumn } from '../../models/filterColumns';
import * as columnDefination from '../../../assets/data/tableColumns.json'


@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.scss']
})
export class FilterPopupComponent implements OnInit {

  filterColumn: FilterColumn | undefined;
  displayedColumns: Array<FilterColumn> = Object.values(columnDefination);

  constructor(@Inject(MAT_DIALOG_DATA) public data: {trigger: ElementRef },
    public dialModalRef: MatDialogRef<FilterPopupComponent>,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    const rect = this.data.trigger.nativeElement.getBoundingClientRect();
    this.dialModalRef.updatePosition({ top: `${rect.top + rect.height}px`, left: `${rect.left}px` })
  }

  goBack() {
    this.filterColumn = undefined;
  }

  onKeyUp(e: any) {
    this.displayedColumns = Object.values(columnDefination).filter(col => col.columnnamehebrew?.includes(e.target.value))
    this.changeDetector.detectChanges();

  }

  fieldSelected(ordernumber: string) {
    this.filterColumn = this.displayedColumns.find(col => col.ordernumber === ordernumber)
  }
  
}
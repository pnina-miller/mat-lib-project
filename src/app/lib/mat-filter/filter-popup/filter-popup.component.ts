import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ChangeDetectorRef,
  Input,
  EventEmitter,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilterColumn } from '../../models/filterColumns';
import { MatTableService } from '../../services/mat-table.service';

interface DataType {
  trigger: ElementRef;
  updateFilters: Function;
}

@Component({
  selector: 'matbea-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.scss'],
})
export class FilterPopupComponent implements OnInit {
  selectedFilterColumn: FilterColumn | undefined;
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
      left: `${rect.right-rect.width}px`,//TODO
    });
debugger
    this.matTableService.columnDefinitions.subscribe(
      (data) => {this.columns = data; this.displayedColumns=data}
    );
  }

  goBack() {
    this.selectedFilterColumn = undefined;
  }

  onKeyUp(value: string) {
    let filteresArr=this.columns.filter( col => col.columnnamehebrew?.includes(value) );
debugger
    this.displayedColumns=filteresArr;
    }

  fieldSelected(ordernumber: string) {
    this.selectedFilterColumn = this.columns.find(
      (col) => col.ordernumber === ordernumber
    );
  }
}

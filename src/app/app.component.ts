import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IfilterValues, PeriodicElement } from './table.inteface';



const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', approved:true },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', approved:true },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', approved:false },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', approved:true },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', approved:true },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', approved:false },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', approved:true },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', approved:false },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', approved:false },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', approved:true},
];

const COLUMNS={
  position: {
    type: 'number',
    name: 'position',
    value: '',
    checkMethod:'exactMatchCheck',
    options:[]
  },
  name: {
    type: 'string',
    name: 'name',
    value: '',
    checkMethod:'stringIncludeCheck',
    options:[]
  },
  weight: {
    type: 'number',
    name: 'weight',
    value: '',
    checkMethod:'exactMatchCheck',
    options:[]
  },
  symbol: {
    type: 'string',
    name: 'symbol',
    value: '',
    checkMethod:'stringIncludeCheck',
    options:['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne']
  },
  approved: {
    type: 'boolean',
    name: 'approved',
    value: '',
    checkMethod:'booleanCheck',
    options:[]
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  elementData= ELEMENT_DATA;

  columns: IfilterValues = COLUMNS

  constructor() {}

  ngOnInit() {
  }

}

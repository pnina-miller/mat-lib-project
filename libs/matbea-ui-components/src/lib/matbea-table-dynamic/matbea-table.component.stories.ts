
// import { MatbeaTableComponent } from './matbea-table.component';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule, MatTableDataSource } from '@angular/material/table';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSortModule } from '@angular/material/sort';

// const displayedColumns :string[]=['position', 'name', 'weight', 'symbol'];
// const data:  PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// const dataSource = new MatTableDataSource<PeriodicElement>(data);
//  const columsToDisplay:string[]=['position', 'name'];
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// export default {
//   title: 'MatbeaTableComponent'
// }

// export const primary = () => ({
//   moduleMetadata: {
//     imports: [
//       BrowserAnimationsModule,
//       MatTableModule,
//       MatPaginatorModule,
//       MatSortModule
//     ]
//   },
//   component: MatbeaTableComponent,
//   props: {
//     displayedColumns: displayedColumns,
//     columsToDisplay:columsToDisplay,
//     dataSource:dataSource
//   },
//   template:` <matbea-table [displayedColumns]=displayedColumns [columsToDisplay]=columsToDisplay [dataSource]=dataSource></matbea-table>`

// })
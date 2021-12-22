import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShofarServices } from '../../services/shofar-services';
import { ColumnDefinition } from '../../store/models/column-definition.model';

@Component({
  selector: 'matbea-units-component',
  templateUrl: './units-component.component.html',
  styleUrls: ['./units-component.component.css'],
})
export class UnitsComponentComponent implements OnInit {
  unitsList: any[]=[];
  dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();
  displayedColumns: any[] = [];
  loadingTable = true;

  constructor(private shofarServices: ShofarServices) {}
  ngOnInit() {
    //TODO: check how to do this
    this.shofarServices.getyechidot(2).subscribe((data: any) => {
      this.unitsList = data.data.avctl071List.fullList;
      this.dataSource=new MatTableDataSource(this.unitsList);
      this.displayedColumns = Object.keys(this.unitsList[0]).map((key,index) => ({
        columnnameenglish: key,display:'1',ordernumber:index,columnformatter:''
      }));
      this.loadingTable=false;
      
    });
  }
}


import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { object } from '@storybook/addon-knobs';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShofarServices } from '../../services/shofar-services';
import { ColumnDefinition } from '../../store/models/column-definition.model';

@Component({
  selector: 'matbea-hosafat-yechida',
  templateUrl: './hosafat-yechida.component.html',
  styleUrls: ['./hosafat-yechida.component.scss'],
})
export class HosafatYechidaComponent implements OnInit {
  yeud: string='';
  hearot:string='';

  YechidaForm = new FormGroup({
    YachidaIdControl:new FormControl(),
    teurYachidaControl:new FormControl(),
    shoviControl:new FormControl(),
    migrashControl:new FormControl(),
  })
  yeudDataList = [
    { id: 'megurim', description: 'מגורים' },
    { id: 'mischar', description: 'מסחר' },
    { id: 'misradim', description: 'משרדים' },
    { id: 'acher', description: 'אחר' },
  ];
  gushChelkaList:any[]=[{misparGush:'123',teurChelka:'456'}]
  gushchelkaDataSource: BehaviorSubject<any>=new BehaviorSubject<any>(this.gushChelkaList)

  displayedColumns:ColumnDefinition[]=[{columnnameenglish: 'misparGush', columnnamehebrew: 'גוש', display: '1', ordernumber: '1', columnformatter:'input', removable:'true', object:{}},
  {columnnameenglish: 'teurChelka', columnnamehebrew: 'חלקה', display: '1', ordernumber: '2', removable:'true'},
  {columnnameenglish: ' ', columnnamehebrew: ' ', display: '0', ordernumber: '3', removable:'true', columnformatter:'icon', object:{icon:'delete', action:line=>this.removeLine(line) }}]//TODO: action
  
  constructor(
    private shofarServices: ShofarServices,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {
    let inputParams = this.data;
  }

  ngOnInit(): void {
    this.shofarServices.getGushChelka().subscribe((data:any)=>{
      this.gushChelkaList=data.data.gushChelka.fullList;
    })
  }

  targetChanged(num: number) {}

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const data={
      ...this.YechidaForm.value,
      yeud:this.yeud,
      hearot:this.hearot
    }
    console.log(data);
    this.dialogRef.close();
  }

  addLine(){
   this.gushChelkaList= [...this.gushChelkaList, {misparGush:'',teurChelka:''}]
   this.gushchelkaDataSource.next(this.gushChelkaList)
  }
  removeLine(line){
    let temp=[...this.gushChelkaList];
    temp.splice(line,1)
   this.gushChelkaList= temp
   this.gushchelkaDataSource.next(this.gushChelkaList)
  }
}
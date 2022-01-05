
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShofarServices } from '../../services/shofar-services';

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
  gushChelkaList:any[]
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
    
  }
}
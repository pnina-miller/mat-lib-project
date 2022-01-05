
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShofarServices } from '../../services/shofar-services';

@Component({
  selector: 'matbea-hosafat-yechida',
  templateUrl: './hosafat-yechida.component.html',
  styleUrls: ['./hosafat-yechida.component.scss'],
})
export class HosafatYechidaComponent implements OnInit {
  unitId: string='';
  shovi: string='';
  teur: string='';
  migrash: string='';
  yeud: string='';
  hearot:string='';

  yeudDataList = [
    { id: 'megurim', description: 'מגורים' },
    { id: 'mischar', description: 'מסחר' },
    { id: 'misradim', description: 'משרדים' },
    { id: 'acher', description: 'אחר' },
  ];
  constructor(
    private shofarServices: ShofarServices,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {
    let inputParams = this.data;
  }

  ngOnInit(): void {}

  targetChanged(num: number) {}

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
  }

  addLine(){
    
  }
}
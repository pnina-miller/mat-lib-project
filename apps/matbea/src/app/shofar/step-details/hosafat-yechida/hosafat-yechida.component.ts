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

  yechidaForm = new FormGroup({
    unitId: new FormControl(),
    shovi: new FormControl(),
    teur: new FormControl(),
    migrash: new FormControl(),
  })

  yeud: string = '';
  hearot: string = '';

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

  ngOnInit(): void { }

  targetChanged(num: number) { }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    
    this.dialogRef.close();
  }
}

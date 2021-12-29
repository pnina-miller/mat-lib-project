
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';
import { ShofarServices } from '../../../services/shofar-services';
import { shalavDataType } from '../../../step-details/hosafat-yechida/step.data';


@Component({
  selector: 'matbea-hosafat-shalav',
  templateUrl: './hosafat-shalav.component.html',
  styleUrls: ['./hosafat-shalav.component.scss']
})
export class HosafatShalavComponent implements OnInit {

shalavForm:FormGroup;

  levelId: string = '';
  endDate: string;
  lastDate: string;
  heiter: string;
 target= {metegYeudMegurim:0, metegYeudMischar:0, metegYeudMisradim:0, metegYeudAcher:0}

 misparProject: number;

  // errorMsg: string;
  showSuccess = false;
  errorMsg: string;

  constructor(private shofarServices: ShofarServices,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {

    let inputParams = this.data as HosafatCheshbonInputParams;
    this.misparProject = inputParams.misparProyectSagur;
  }

  ngOnInit(): void {
   
  }


  targetChanged(num: number) {
    this.target[num]=1
  }

  cancel() {
    this.dialogRef.close();

  }
is=false
  save() {
    if(this.is){this.is=true
    const data = {
      misparProyectSagur:this.misparProject,
      metegHeterBniya:this.heiter=="true"?1:0,
      taarich8HeterBniya: Number(this.lastDate.replace(/\-/ig, '')),
      taarich8SiyumTzafui: Number(this.endDate.replace(/\-/ig, '')),
      teurHaShlav: this.levelId,
      teurTochnitBinyanIr:'gergg',
      ...this.target
    } as shalavDataType;
    this.shofarServices.saveShalav(data, this.misparProject).subscribe(resp => {
      let generalResponse = resp as GeneralResponse;
      if (generalResponse.messages != null && generalResponse.messages.global.errors.length > 0) {
        this.errorMsg = generalResponse.messages.global.errors[0].message;
      } else {
        this.dialogRef.updateSize('50%', '30%')
        this.showSuccess = true;
      }
    },
      (error) => {
        console.error('error caught in component' + error)
      })
    }
  }

  addUnits() {
    this.dialogRef.close();
  }
}

interface HosafatCheshbonInputParams {
  misparProyectSagur: number;

}
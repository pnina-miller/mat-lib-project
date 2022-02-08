import { Component, OnInit, Inject } from '@angular/core';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShofarServices } from '../../../services/shofar-services';
import { shalavDataType } from '../../../shlavim-details/shalav.data';

@Component({
  selector: 'matbea-hosafat-shalav',
  templateUrl: './hosafat-shalav.component.html',
  styleUrls: ['./hosafat-shalav.component.scss'],
})
export class HosafatShalavComponent implements OnInit {
  shalavForm: FormGroup;

  heterBniya;
  yeudValue=''
  yeudOptions = {
    MetegYeudMegurim:'מגורים',
    MetegYeudMischar:'מסחר',
    MetegYeudMisradim:'משרדים',
    MetegYeudAcher:'אחר'
  };

  misparProject: number;
  shalav: any;
  // errorMsg: string;
  showSuccess = false;
  errorMsg: string;
  taarich8SiyumTzafuiErrorMsg="למניעת שיבושים בגביית עמלת ערבות, אין להקליד תאריך שהוא ב-1 לינואר  ";

  constructor(
    private shofarServices: ShofarServices,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: HosafatCheshbonInputParams
  ) {
    this.misparProject = data.misparProyectSagur;
  }

  ngOnInit(): void {
   let yeudSelected=  this.data.item && Object.entries(this.data.item)?.find((entry)=>entry[1]=='1' && entry[0].includes('MetegYeud'));
   this.yeudValue = yeudSelected?yeudSelected[0]:'';
    this.shalavForm = new FormGroup({
      teurHaShlav: new FormControl(
        this.data.item?.teurHaShlav,
        Validators.required
      ),
      taarich8SiyumTzafui: new FormControl(
        this.data.item?.taarich8SiyumTzafui.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3'),
        [Validators.required,Validators.pattern('^((?!-01-01).)*$')]
      ),
      taarich8HeterBniya: new FormControl(
        this.data.item?.taarich8HeterBniya.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3'),
        Validators.required
      ),
      teurTochnitBinyanIr: new FormControl(
        this.data.item?.teurTochnitBinyanIr,
        Validators.required
      ),
    });
  }

  yeudChanged(value: string) {
    this.yeudValue = value;
  }
  unSorted(){}

  cancel() {
    this.dialogRef.close();
  }
  // is=false

  validateData() {
    return this.shalavForm.valid;
  }
  save() {
    //TODO: validate all
    if (!this.validateData()) {
      alert('error');
      return;
    }
    // if(!this.is){this.is=true
    const data = {
      ...this.data.item,
      misparProyectSagur: this.misparProject,
      ...this.shalavForm.value,
      metegHeterBniya: this.heterBniya == 'true' ? 1 : 0,
      taarich8HeterBniya: Number(this.shalavForm.value.taarich8HeterBniya.replace(/\-/gi, '')),
      taarich8SiyumTzafui: Number(this.shalavForm.value.taarich8SiyumTzafui.replace(/\-/gi, '')),
      [this.yeudValue]:'1',
    } as shalavDataType;
    this.shofarServices.saveShalav(data, this.misparProject).subscribe(
      (resp) => {
        let generalResponse = resp as GeneralResponse;
        if (
          generalResponse.messages != null &&
          generalResponse.messages.global.errors.length > 0
        ) {
          this.errorMsg = generalResponse.messages.global.errors[0].message;
        } else {
          this.dialogRef.updateSize('50%');
          this.showSuccess = true;
        }
      },
      (error) => {
        console.error('error caught in component' + error);
      }
    );
    // }
  }

  addUnits() {
    this.dialogRef.close();
  }
}

interface HosafatCheshbonInputParams {
  misparProyectSagur: number;
  item: any;
}

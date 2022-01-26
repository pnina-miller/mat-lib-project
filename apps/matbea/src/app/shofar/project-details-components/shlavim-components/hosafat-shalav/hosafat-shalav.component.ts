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
  yeud = {
    metegYeudMegurim: 0,
    metegYeudMischar: 0,
    metegYeudMisradim: 0,
    metegYeudAcher: 0,
  };

  misparProject: number;
  shalav: any;
  // errorMsg: string;
  showSuccess = false;
  errorMsg: string;

  constructor(
    private shofarServices: ShofarServices,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: HosafatCheshbonInputParams
  ) {
    this.misparProject = data.misparProyectSagur;
  }

  ngOnInit(): void {
    //TODO: set value in matbea input
    this.shalavForm = new FormGroup({
      teurHaShlav: new FormControl(
        this.data.item?.teurHaShlav,
        Validators.required
      ),
      taarich8SiyumTzafui: new FormControl(
        this.data.item?.taarich8SiyumTzafui,
        [Validators.required,Validators.pattern('^((?!-01-01).)*$')]
      ),
      taarich8HeterBniya: new FormControl(
        this.data.item?.taarich8HeterBniya,
        Validators.required
      ),
      teurTochnitBinyanIr: new FormControl(
        this.data.item?.teurTochnitBinyanIr,
        Validators.required
      ),
    });
  }

  yeudChanged(num: number) {
    this.yeud[num] = '1';
  }

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
      ...this.yeud,
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

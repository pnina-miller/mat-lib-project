import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ColumnDefinition } from 'apps/matbea/src/app/shofar/store/models/column-definition.model';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'matbea-columns-picker',
  templateUrl: './matbea-columns-picker.component.html',
  styleUrls: ['./matbea-columns-picker.component.scss']
})
export class MatbeaColumnsPickerComponent implements OnInit {

  saveInDB: boolean = true;
  toChooseList: any[] = [];
  inUseList: any[] = [];
  locked: any[] = [];
  dataToBack: any[] = [];
  inUseListToBack: any[] = [];
  limit: number;



  constructor(public dialogRef: MatDialogRef<MatbeaColumnsPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: { data: ColumnDefinition[], saveInDB: boolean, limit: number }) { }


  ngOnInit(): void {
    this.dialogData.data.filter(v=> v.columnnamehebrew!='').forEach(
      (v) => {
        if (v.display === '1') {
          if (v.removable === '1') {
            this.inUseList.push(v.columnnamehebrew)
          } else {
            this.locked.push(v.columnnamehebrew)
          }
        } else {
          this.toChooseList.push(v.columnnamehebrew)
        }
      }
    )
    this.saveInDB = this.dialogData.saveInDB;
    this.limit= this.dialogData?.limit?this.dialogData?.limit:null;
    console.log(this.dialogData.data);
  }
  onNoSave() {
    this.dialogRef.close();
  }
  onSave() {
    this.inUseListToBack = this.locked.concat(this.inUseList);
    this.dataToBack = this.dialogData.data;
    this.dataToBack = this.dataToBack.map(
      (v: ColumnDefinition) => {
        let keys =Object.keys(v);
        let tempColumnDefinition={};
        keys.forEach(key=>{
          tempColumnDefinition[key]=v[key];
        });
        tempColumnDefinition['display']=null;
        tempColumnDefinition['ordernumber']=null;
        if (this.inUseListToBack.includes(v.columnnamehebrew)) {
          tempColumnDefinition['display']= '1';
          tempColumnDefinition['ordernumber'] = (this.inUseList.indexOf(v.columnnamehebrew) + 1).toString();
        } else {
          tempColumnDefinition['display'] = '0';
          let num= this.toChooseList.indexOf(v.columnnamehebrew);
          if(num<0){
            tempColumnDefinition['ordernumber']=num
          }else {
            tempColumnDefinition['ordernumber'] = (num + this.inUseListToBack.length).toString();
          }

        }
        console.log('Sinun ba afterClose', tempColumnDefinition)
        return tempColumnDefinition;
      }
    )
    this.dataToBack = this.dataToBack.sort((a, b) => {
      return Number(a.ordernumber) - Number(b.ordernumber);
    })
    this.dialogData.data=this.dataToBack;
    this.dialogData.saveInDB=this.saveInDB
    this.dialogRef.close(this.dialogData);

  }
  isChange($event: MatSlideToggleChange){
    this.saveInDB=$event.checked;
    console.log("Event in Columns-picker, save in db: ", this.saveInDB);
  }
}

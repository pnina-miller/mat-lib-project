import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { any } from 'apps/matbea/src/app/shofar/store/models/column-definition.model';
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
  limit!: number;



  constructor(public dialogRef: MatDialogRef<MatbeaColumnsPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: { data: any[], saveInDB: boolean, limit: number }) { }


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
    this.limit= this.dialogData?.limit;
    console.log(this.dialogData.data);
  }
  onNoSave() {
    this.dialogRef.close();
  }
  onSave() {
    this.inUseListToBack = this.locked.concat(this.inUseList);
    this.dataToBack = this.dialogData.data;
    this.dataToBack = this.dataToBack.map(
      (v: any) => {
        let keys =Object.keys(v);
        let tempany:{[key: string]: any}={};
        keys.forEach(key=>{
          tempany[key]=v[key];
        });
        tempany['display']=null;
        tempany['ordernumber']=null;
        if (this.inUseListToBack.includes(v.columnnamehebrew)) {
          tempany['display']= '1';
          tempany['ordernumber'] = (this.inUseList.indexOf(v.columnnamehebrew) + 1).toString();
        } else {
          tempany['display'] = '0';
          let num= this.toChooseList.indexOf(v.columnnamehebrew);
          if(num<0){
            tempany['ordernumber']=num
          }else {
            tempany['ordernumber'] = (num + this.inUseListToBack.length).toString();
          }

        }
        console.log('Sinun ba afterClose', tempany)
        return tempany;
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

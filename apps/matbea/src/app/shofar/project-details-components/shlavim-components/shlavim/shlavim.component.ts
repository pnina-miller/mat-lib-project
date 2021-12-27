

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnDefinition } from 'libs/matbea-ui-components/src/lib/models/column-definition.model';
import { HosafatShalavComponent } from '../hosafat-shalav/hosafat-shalav.component';
import { ShlavimService } from './shlavim.service';

@Component({
  selector: 'matbea-shlavim',
  templateUrl: './shlavim.component.html',
  styleUrls: ['./shlavim.component.scss']
})
export class ShlavimComponent implements OnInit {
  openHosafatCheshbonPopup() {
    const dialogRef = this.dialog.open(HosafatShalavComponent, {
      width: '50%',
      height: '50%',
      panelClass: 'hosafat-shalav-container',
      data: {},
    });

    dialogRef.afterClosed().subscribe(newProject => {
      // this.getCheshbonotProject();     
    });
  }

  @Input('shlavim') shlavim;
  displayedColumns = [{ columnnameenglish: 'misparShlav', columnnamehebrew: 'זיהוי שלב', columnformatter: 'link', display: '1' },
  { columnnameenglish: 'teurYeudShlav', columnnamehebrew: 'ייעוד', columnformatter: '', display: '1' },
  { columnnameenglish: 'misparYechidotBeSlv', columnnamehebrew: "מס' יחידות", columnformatter: '', display: '1' },
  { columnnameenglish: 'taarich8SiyumTzafui', columnnamehebrew: 'מועד סיום צפוי', columnformatter: 'Int2DateFormatter', display: '1' },
  { columnnameenglish: 'metegHeterBniya', columnnamehebrew: 'היתר בניה', columnformatter: 'YESNO', display: '1' },
  { columnnameenglish: 'taarich8HeterBniya', columnnamehebrew: 'מועד מתן היתר בניה', columnformatter: 'Int2DateFormatter', display: '1' },
  { columnnameenglish: 'shemGoremMemamen', columnnamehebrew: 'שותף מממן', columnformatter: '', display: '1' },
  {
    columnnameenglish: 'menu', columnnamehebrew: '', columnformatter: 'menu', display: '1', object: [
      { "id": 0, "name": "עריכת השלב", "disabled": false, "role": "menuitem" },
      { "id": 1, "name": "הוספת יחידות", "disabled": false, "role": "menuitem" }, {
        "id": 2, "name": "הוספת יחידות כקובץ", "disabled": false, "role": "menuitem"
      },]
  }]

  // columsToDisplay = this.displayedColumns.map(col => col.columnnameenglish).concat('menu')
  constructor(public dialog: MatDialog, public shlavimService: ShlavimService, private router: Router) { }

  ngOnInit(): void {
    this.shlavimService.init(this)
  }

  onDbClick(row: any) {
    console.log('row', row);
    if (row.misparYechidotBeSlv > 0)
      this.router.navigate([this.router.url, 'units', row.misparShlav]);
  }

  clickInRow(e){
    alert('h')
  }

}



import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
      panelClass:'hosafat-shalav-container',
      data: {},    
    });

    dialogRef.afterClosed().subscribe(newProject => {
      // this.getCheshbonotProject();     
    });   }

  @Input('shlavim') shlavim: any[];
  displayedColumns=[{columnnameenglish:'misparShlav',columnTitle:'זיהוי שלב', columnformatter:'link'},
{columnnameenglish:'teurYeudShlav',columnTitle:'ייעוד', columnformatter:''},
{columnnameenglish:'misparYechidotBeSlv',columnTitle:"מס' יחידות", columnformatter:''},
{columnnameenglish:'taarich8SiyumTzafui',columnTitle:'מועד סיום צפוי', columnformatter:'Int2DateFormatter'},
{columnnameenglish:'metegHeterBniya',columnTitle:'היתר בניה', columnformatter:'YESNO'},
{columnnameenglish:'taarich8HeterBniya',columnTitle:'מועד מתן היתר בניה', columnformatter:'Int2DateFormatter'},
{columnnameenglish:'shemGoremMemamen',columnTitle:'שותף מממן', columnformatter:''}]

  columsToDisplay=this.displayedColumns.map(col=>col.columnnameenglish).concat('menu')
  constructor(public dialog: MatDialog,public shlavimService: ShlavimService, private router: Router) { }

  ngOnInit(): void {
    this.shlavimService.init(this)
  }

  onDbClick(row:any){console.log('row',row);
    if(row.misparYechidotBeSlv>0)
    this.router.navigate([this.router.url,'units',row.misparShlav]);
  }

}

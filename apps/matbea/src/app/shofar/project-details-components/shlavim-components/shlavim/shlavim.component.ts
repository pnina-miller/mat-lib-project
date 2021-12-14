

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'matbea-shlavim',
  templateUrl: './shlavim.component.html',
  styleUrls: ['./shlavim.component.scss']
})
export class ShlavimComponent implements OnInit {

  @Input('shlavim') shlavim: any[];
  displayedColumns=[{columnnameenglish:'teurHaShlav',columnTitle:'זיהוי שלב', columnformatter:'link'},
{columnnameenglish:'teurYeudShlav',columnTitle:'ייעוד', columnformatter:''},
{columnnameenglish:'misparYechidotBeSlv',columnTitle:"מס' יחידות", columnformatter:''},
{columnnameenglish:'taarich8SiyumTzafui',columnTitle:'מועד סיום צפוי', columnformatter:'Int2DateFormatter'},
{columnnameenglish:'metegHeterBniya',columnTitle:'היתר בניה', columnformatter:'YESNO'},
{columnnameenglish:'taarich8HeterBniya',columnTitle:'מועד מתן היתר בניה', columnformatter:'Int2DateFormatter'},
{columnnameenglish:'shemGoremMemamen',columnTitle:'שותף מממן', columnformatter:''}]
  columsToDisplay=this.displayedColumns.map(col=>col.columnnameenglish)
  constructor() { }

  ngOnInit(): void {
  }

}

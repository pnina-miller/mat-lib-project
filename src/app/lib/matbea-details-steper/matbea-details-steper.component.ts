import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'matbea-details-steper',
  templateUrl: './matbea-details-steper.component.html',
  styleUrls: ['./matbea-details-steper.component.scss']
})
export class MatbeaDetailsSteperComponent implements OnInit {
  @Input() steps!: {name:string, routTo: string}[] ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(routTo: string) {
    if(routTo&&routTo.length>0){
      this.router.navigate([routTo]);
    }

  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'matbea-arichat-shalav-menu',
  templateUrl: './arichat-shalav-menu.component.html',
  styleUrls: ['./arichat-shalav-menu.component.scss']
})
export class ArichatShalavMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addUnitsAction():void {
    this.router.navigate([this.router.url,'units']);
  }
}

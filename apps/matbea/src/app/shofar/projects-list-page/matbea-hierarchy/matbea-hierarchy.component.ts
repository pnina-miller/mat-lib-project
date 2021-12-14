import {Component, OnInit, SimpleChanges, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../services/shofar-services';
import { GeneralResponse } from '../../../../../../../libs/matbea-shared-components/src/lib/beans/general-response';

@Component({
  selector: 'matbea-hierarchy',
  templateUrl: './matbea-hierarchy.component.html',
  styleUrls: ['./matbea-hierarchy.component.scss']
})
export class MatbeaHierarchyComponent implements OnInit {
  misparChativa: string = "3";
  misparAgaf: string = "14";
  kodSector: string = "0358";
  misparMakal = "05140835801";
  hierarchy: HierarchyOutput = new HierarchyOutput();
  @Output() fromHierarchia= new EventEmitter;

  constructor(private http: HttpClient, private shofarServices: ShofarServices) { }

  ngOnInit(): void {
    this.shofarServices.getUserDetails().subscribe(resp => {      
      console.log("---> Data of getUserDetails"); 
      let generalResponse = resp as GeneralResponse;
      let userData = (generalResponse.data as UserDetails).userDataMf;
      this.misparChativa = userData.misparChativa;
      this.misparAgaf = userData.misparAgaf;
      this.kodSector = userData.kodSector;
      this.misparMakal = userData.misparMamal;
      
      this.hierarchy.misparChativa  =  userData.misparChativa;
      this.hierarchy.misparAgaf     =  userData.misparAgaf;
      this.hierarchy.kodSector      =  userData.kodSector;
      this.hierarchy.misparMakal  =  userData.misparMamal;     
      this.fromHierarchia.emit(JSON.stringify(this.hierarchy)); 
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }


  chativaChanged($event){
    console.log($event);
    this.misparChativa = $event?$event:"";
    this.hierarchy.misparChativa = $event?$event:"";
    this.fromHierarchia.emit(JSON.stringify(this.hierarchy));
  }

  agafChanged($event){
    console.log($event);
    this.misparAgaf = $event?$event:"";
    this.hierarchy.misparAgaf = $event?$event:"";
    this.fromHierarchia.emit(JSON.stringify(this.hierarchy));
  }

  sectorChanged($event){
    console.log($event);
    this.kodSector = $event?$event:"";
    this.hierarchy.kodSector = $event?$event:"";
    this.fromHierarchia.emit(JSON.stringify(this.hierarchy));
  }

  makalChanged($event){
    console.log($event);
    this.misparMakal =$event?$event:"";
    this.hierarchy.misparMakal =$event?$event:"";
    this.fromHierarchia.emit(JSON.stringify(this.hierarchy));
  }

}


export interface UserDetails{
  userData: UserDataBean;
  userDataMf: UserDataBean;
}

export interface UserDataBean{
  uid: string;
	misparChativa: string;
	misparAgaf: string;
	kodSector: string;
	misparMamal: string;
	misparBank: string;
	serialNumber: string;
	kodTafkidFunktzionali: string;
}

export class HierarchyOutput{
  misparChativa: string;
  misparAgaf: string;
  kodSector: string;
  misparMakal: string;
}
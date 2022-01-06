import { Component, OnInit, Input, Output } from '@angular/core';
import { GeneralComboEntry } from '../matbea-hierarchy/matbea-hierarchy-general-combo/general-combo-interface';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../../../../apps/matbea/src/app/shofar/services/shofar-services';
import { GeneralResponse } from '../beans/general-response';
import { startWith, map, tap } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'matbea-matbea-input-cities',
  templateUrl: './matbea-input-cities.component.html',
  styleUrls: ['./matbea-input-cities.component.scss']
})


export class MatbeaInputCitiesComponent implements OnInit {
  citiesList: GeneralComboEntry[];
  filteredCitiesComboBox: Observable<GeneralComboEntry[]>;
  citiesControl = new FormControl();
  @Input('selectedCity') selectedCity: string;
  @Input('lable') lable: string;
  @Input('disabled') disabled: boolean;
  @Input('iconButtomPrefixName') iconButtomPrefixName: string;
  @Input('lablePosition') lablePosition: string;
  @Input('disabledTransparent') disabledTransparent: string;
  @Output() selectedCityChanged = new EventEmitter<String>();
  @Output() selectedCityIdChanged = new EventEmitter<String>();

  constructor(private http: HttpClient, private shofarServices: ShofarServices) { }

  ngOnInit(): void {
    this.getCitiesList();
    
  }


  public getCitiesList(): void{            
    this.shofarServices.getCitiesList().subscribe(resp => {            
        let generalResponse = resp as GeneralResponse;       
        this.citiesList = (generalResponse.data  as CitiesListResponse).citiesList;

        this.filteredCitiesComboBox = this.citiesControl.valueChanges
          .pipe(
            startWith(''),
            map(id => typeof id === 'string' ? id : id.description),
            map(value => value ? this._filter(value) : this.citiesList.slice()),            
          );

          this.citiesControl.valueChanges.subscribe(
            value => {
              let cityId = this.getCitiyId(value);
              this.selectedCityChanged.emit(value);
              this.selectedCityIdChanged.emit(cityId);
            }
          )
    });
  }


  private getCitiyId(selectedValue: string): string{
    let results = this.citiesList.filter(entry => entry.value == selectedValue);
    
    if(results.length == 1){
      return results[0].id;
    }

    return "";
  }
 

  private _filter(name: string): GeneralComboEntry[] {
    const filterValue = name.toLowerCase();

    return this.citiesList.filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);
  
  }

  cityChanged(selectedCity){
   // this.selectedCity = selectedCity; 
   // this.selectedCityChanged.emit(selectedCity);
  }

}


export interface CitiesListResponse{
  citiesList: GeneralComboEntry[];
}
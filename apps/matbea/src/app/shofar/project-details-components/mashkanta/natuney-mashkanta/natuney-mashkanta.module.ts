import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatuneyMashkantaComponent } from './natuney-mashkanta.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatbeaFormFieldModule, MatbeaLebelModule, MatbeaComboModule} from "@pdesks/matbea-ui-components";
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MAT_DATE_LOCALE} from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';
import { NatuneyMashkantaViewModule} from '../natuney-mashkanta-view/natuney-mashkanta-view.module';
import { NatuneyMashkantaEditModule} from '../natuney-mashkanta-edit/natuney-mashkanta-edit.module';





@NgModule({
  declarations: [
    NatuneyMashkantaComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatbeaFormFieldModule,
    MatbeaLebelModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatbeaComboModule,
    NatuneyMashkantaViewModule,
    NatuneyMashkantaEditModule    
  ],
  exports: [
    NatuneyMashkantaComponent
  ],
  providers: [

    {provide: MAT_DATE_LOCALE, useValue: 'en-FR'},
    DatePipe

  ]

})
export class NatuneyMashkantaModule { }

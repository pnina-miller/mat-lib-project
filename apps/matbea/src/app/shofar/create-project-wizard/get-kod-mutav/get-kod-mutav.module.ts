import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetKodMutavComponent } from './get-kod-mutav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatbeaButtonModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import { MatbeaDividerModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-divider/matbea-divider.module';



@NgModule({
  declarations: [GetKodMutavComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,
    ReactiveFormsModule ,
    MatbeaButtonModule,
    MatbeaDividerModule,
  ],
  exports: [GetKodMutavComponent,
    //  MatFormFieldModule,
    //   MatInputModule
    ]
})
export class GetKodMutavModule { }

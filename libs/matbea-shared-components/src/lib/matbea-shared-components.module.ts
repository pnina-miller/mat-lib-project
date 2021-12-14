import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonTabModule } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.module';
import { MatbeaAgafComboModule } from './matbea-hierarchy/matbea-agaf-combo/matbea-agaf-combo.module';
import { MatbeaSectorComboModule } from './matbea-hierarchy/matbea-sector-combo/matbea-sector-combo.module';
import { MatbeaHierarchyComboModule } from './matbea-hierarchy/matbea-hierarchy-combo/matbea-hierarchy-combo.module';



@NgModule({
  imports: [CommonModule],
  declarations: [     
    
  ],
  exports:[
  
  ]

})
export class MatbeaSharedComponentsModule {}

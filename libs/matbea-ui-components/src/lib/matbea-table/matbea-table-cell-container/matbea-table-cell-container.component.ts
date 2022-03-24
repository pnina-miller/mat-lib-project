import { AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatbeaTableCellComponent } from '../matbea-table-cell/matbea-table-cell.component';

@Component({
  selector: 'matbea-table-cell-container',
  templateUrl: './matbea-table-cell-container.component.html',
  styleUrls: ['./matbea-table-cell-container.component.scss']
})
export class MatbeaTableCellContainerComponent implements AfterViewInit {

 @Input()  index;
 @Input()  item;
 @Input() column;
 @Output() clickInMenu = new EventEmitter();
 @Output() onRowSelected = new EventEmitter();

 @ViewChild(MatbeaTableCellComponent) tableCellComponent: MatbeaTableCellComponent;


  constructor( public viewContainerRef:ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    if(this.tableCellComponent){
      if(this.column.dynamicCellComponent){
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.column.dynamicCellComponent);
        const viewContainerRef = this.tableCellComponent.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        try{
        viewContainerRef.element.nativeElement.remove(0)
        } catch(err){debugger}
        (componentRef.instance as any).item=this.item;
        (componentRef.instance as any).column=this.column;
        (componentRef.instance as any).index=this.index;
        (componentRef.instance as any).clickInMenu=this.clickInMenu;
        (componentRef.instance as any).onRowSelected=this.onRowSelected;
        
      }
    
    }
  }

}

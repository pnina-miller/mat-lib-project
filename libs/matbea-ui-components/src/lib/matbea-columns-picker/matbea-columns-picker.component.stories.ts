import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatbeaIconButtonModule } from '../matbea-icon-button/matbea-icon-button.module';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatbeaColumnsPickerModule } from './matbea-columns-picker.module';
import { MatbeaColumnsPickerComponent } from './matbea-columns-picker.component';


export default {
    title: 'MatbeaColumnsPickerComponent '
}

export const Default = () => ({
    component: MatDialog,
    moduleMetadata: {
        declarations: [
            MatbeaPickerDialogComponent,
            
        ],
        imports: [
            BrowserAnimationsModule,
            MatbeaColumnsPickerModule,
            MatbeaIconButtonModule,
            MatDialogModule,
            
        ]
    },
  
    props: {
    },
    template: `<matbea-picker-dialog> `,


})
@Component({
    selector: 'matbea-picker-dialog',
    template: `<matbea-icon-button  [icon]='"view_column"' (onClick)="openDialog()">Pick one</matbea-icon-button>    `,
})
 class MatbeaPickerDialogComponent {
    inUse = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];

    toChoose = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];
    constructor(public dialog: MatDialog) { }
    openDialog() {
        const dialogRef = this.dialog.open(MatbeaColumnsPickerComponent,
            {
         
                 width: '400px',
                 height: '500px',
              
                data: { toChoose: this.toChoose, inUse: this.inUse },
            

            });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog saveInDB: ${result.saveInDB}`);
            console.log(`Dialog result: ${result.inUseList}`);

        });
    }


}


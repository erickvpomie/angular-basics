import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ContadorComponent
import { ContadorComponent } from './contador.component';



@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ],
  imports: [
    CommonModule,
  ]
})


export class ContadorModule { }

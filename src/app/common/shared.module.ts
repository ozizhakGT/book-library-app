import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

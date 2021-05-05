import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { BookComponent } from './book/book.component';
import {SharedModule} from '../common/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    LibraryComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LibraryRoutingModule,
    SharedModule
  ]
})
export class LibraryModule { }

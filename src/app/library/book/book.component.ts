import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{
  @Input() book: any;
  imageUrl: string = '';

  ngOnInit(): void {
    this.imageUrl = this.book?.imageLinks?.thumbnail;
  }

  onError(): void {
    if (this.book?.imageLinks?.thumbnail) {
      this.imageUrl = 'assets/images/default-book-pic.png';
    }
  }
}

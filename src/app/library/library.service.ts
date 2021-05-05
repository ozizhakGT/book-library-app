import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAIsNH7nyJKwxHcJytxD7E91u_I-EI35D4';
  maxResults = 20;

  constructor(private http: HttpClient) { }

  fetchBooks(query: string, index: number): Observable<object> {
    return this.http.get<any>(`${this.baseUrl}&q=${query}&maxResults=${this.maxResults}&startIndex=${index}`)
      .pipe(
        pluck('items'),
        map(books => books.map(((book: any) => book.volumeInfo))));
  }
}

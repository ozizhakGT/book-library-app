import { Component } from '@angular/core';
import {AuthService} from '../auth.service';
import {LibraryService} from './library.service';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  userName: string;
  books$: Observable<any> | undefined;
  isLoading: boolean = false;
  startIndex: number = 0;
  errorMessage: string = '';

  constructor(private authService: AuthService, private libraryService: LibraryService) {
    this.userName = this.authService.getAuthUserDetails();
  }

  onSubmit(form: NgForm): void {
    const query = form.value.query.trim();

    if (!query) {
      this.errorMessage = 'Mandatory Field';
      form.reset();

      return;
    }

    this.onGetBooks(query);
  }

  onGetBooks(query: string): void {
    this.isLoading = true;

    this.books$ = this.libraryService.fetchBooks(query, this.startIndex).pipe(
      tap(() => {
        this.isLoading = false;
      })
    );

    this.books$.subscribe(books => {
      if (books.length > this.startIndex) {
        this.startIndex = books.length;
      }
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}

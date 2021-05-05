import { Component, OnDestroy } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  constructor(private authService: AuthService) { }
  errorMessage: string = '';

  ngOnDestroy(): void {
    this.errorMessage = '';
  }

  onLogin(form: NgForm): void {
    const { value: { username } } = form;
    const currentUsername = username.trim();

    if (!currentUsername) {
      this.errorMessage = 'Mandatory Input';
      form.reset();

      return;
    }

    this.authService.login(currentUsername);
  }
}

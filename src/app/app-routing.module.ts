import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';

@Injectable({ providedIn: 'root' })
class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    const isValidAuth = this.authService.isLoggedIn();

    if (!isValidAuth) {
      this.router.navigate([('login')]);
    }

    return isValidAuth;
  }
}

@Injectable({ providedIn: 'root' })
class AuthCheckedGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isValidAuth = this.authService.isLoggedIn();

    if (isValidAuth) {
      this.router.navigate(['']);
    }

    return !isValidAuth;
  }
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule),
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthCheckedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

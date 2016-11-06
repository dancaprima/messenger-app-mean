import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { Routes } from '@angular/router';

export const AUTH_ROUTES : Routes = [
    { path: '' , redirectTo:'signup', pathMatch:'full'},
    { path: 'signin' ,component: SigninComponent},
    { path: 'signup' ,component: SignupComponent},
    { path: 'logout' ,component: LogoutComponent}
];
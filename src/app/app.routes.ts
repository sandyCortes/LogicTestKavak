import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './dashboard/login/login.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ValidationsService } from './services/validations.service';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:email', 
    canActivate: [ ValidationsService ],
    component: ProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OurservicesComponent } from './pages/ourservices/ourservices.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { DashboardComponent } from './pages/account/dashboard/dashboard.component';
import { AuthGuard } from './services/guards/auth-guard.service';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: OurservicesComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Protect this route
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: '/account/login', pathMatch: 'full' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

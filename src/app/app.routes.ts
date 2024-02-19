import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddCampaignPageComponent } from './pages/add-campaign-page/add-campaign-page.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: HomePageComponent, canActivate: [authGuardGuard] },
  {
    path: 'add',
    component: AddCampaignPageComponent,
    canActivate: [authGuardGuard],
  },
];

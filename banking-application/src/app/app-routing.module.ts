import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { CheckingsComponent } from './components/checkings/checkings.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SavingsComponent } from './components/savings/savings.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';






const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: AdminPortalComponent },
  { path: 'new_client', component: AddClientComponent },
  { path: 'account/:id', component: LandingPageComponent },
  { path: 'account/:id/savings', component: SavingsComponent },
  { path: 'account/:id/checkings', component: CheckingsComponent },
  { path: 'account/:id/deposit', component: DepositComponent },
  { path: 'account/:id/withdraw', component: WithdrawalComponent },
  { path: 'account/:id/profile', component: ProfileComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

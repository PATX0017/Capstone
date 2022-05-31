import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { CheckingsComponent } from './components/checkings/checkings.component';
import { SavingsComponent } from './components/savings/savings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'checkings', component: CheckingsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawalComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

]





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    LoginComponent,
    DepositComponent,
    WithdrawalComponent,
    CheckingsComponent,
    SavingsComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

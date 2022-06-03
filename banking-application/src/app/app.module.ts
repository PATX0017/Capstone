import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { CheckingsComponent } from './components/checkings/checkings.component';
import { SavingsComponent } from './components/savings/savings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

/*Export class landing page*/
export class app {

}


const routes: Routes = [



]





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    DepositComponent,
    WithdrawalComponent,
    CheckingsComponent,
    SavingsComponent,
    ProfileComponent,
    AdminPortalComponent,
    HomePageComponent,
    TopBarComponent,

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

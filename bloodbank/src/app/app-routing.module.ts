import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OtherBloodBanksComponent } from './other-blood-banks/other-blood-banks.component';
import { LoginComponent } from './admin-login/admin-login.component';
import { DonorLoginComponent } from './donor-login/donor-login.component';
import { DoneeLoginComponent } from './donee-login/donee-login.component';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { DoneeRegisterComponent } from './donee-register/donee-register.component';
import { AppointmentsComponent } from './appointments/appointments.component';


const routes: Routes = [
  { path: 'footer', component: FooterComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: '', component: HomepageComponent},
  { path: 'other-blood-banks', component: OtherBloodBanksComponent},
  { path: 'admin-login', component: LoginComponent},
  { path: 'donor-login', component: DonorLoginComponent},
  { path: 'donee-login', component: DoneeLoginComponent},
  { path: 'donor-register', component: DonorRegisterComponent},
  { path: 'donee-register', component: DoneeRegisterComponent},
  { path: 'appointments', component: AppointmentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
export const routingComponents = [
  FooterComponent,
  NavbarComponent, 
  HomepageComponent,
  OtherBloodBanksComponent,
  LoginComponent,
  DonorLoginComponent,
  DoneeLoginComponent,
  DonorRegisterComponent,
  DoneeRegisterComponent,
  AppointmentsComponent
]

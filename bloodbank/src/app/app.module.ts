//built-In
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';

import { FooterComponent } from './other-web-components/footer/footer.component';
import { NavbarComponent } from './other-web-components/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OtherBloodBanksComponent } from './nbts-other-services/other-blood-banks/other-blood-banks.component';
import { LoginComponent } from './login/admin-login/admin-login.component';
import { DonorLoginComponent } from './login/donor-login/donor-login.component';
import { DoneeLoginComponent } from './login/donee-login/donee-login.component';
import { DonorRegisterComponent } from './register/donor-register/donor-register.component';
import { DoneeRegisterComponent } from './register/donee-register/donee-register.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { NbtsOtherServicesComponent } from './nbts-other-services/nbts-other-services.component';
import { AboutBloodComponent } from './nbts-other-services/about-blood/about-blood.component';
import { VissionMissionComponent } from './nbts-other-services/vission-mission/vission-mission.component';
import { OurJourneyComponent } from './nbts-other-services/our-journey/our-journey.component';
import { OrganizationChartComponent } from './nbts-other-services/organization-chart/organization-chart.component';
import { PerformancesOfNbtsComponent } from './nbts-other-services/performances-of-nbts/performances-of-nbts.component';
import { ServicesOfNbtsComponent } from './nbts-other-services/services-of-nbts/services-of-nbts.component';
import { OrganizeBloodCampaignComponent } from './organize-blood-campaign/organize-blood-campaign.component';
import { AnalyseDataComponent } from './analyse-data/analyse-data.component';
import { DonorFacilitiesComponent } from './donor-facilities/donor-facilities.component';
import { DoneeFacilitiesComponent } from './donee-facilities/donee-facilities.component';
import { AdminFacilitiesComponent } from './admin-facilities/admin-facilities.component';
import { RegisterComponent } from './register/register.component';
import { OtherWebComponentsComponent } from './other-web-components/other-web-components.component';
import { BookAppointmentsComponent } from './appointments/book-appointments/book-appointments.component';
import { RegisterBloodCampaignComponent } from './organize-blood-campaign/register-blood-campaign/register-blood-campaign.component';
import { ContactUsComponent } from './nbts-other-services/contact-us/contact-us.component';
import { BloodGroupsComponent } from './nbts-other-services/blood-groups/blood-groups.component';
import { DonorMagazinesComponent } from './nbts-other-services/donor-magazines/donor-magazines.component';
import { NewsComponent } from './nbts-other-services/news/news.component';
import { AnualReportsComponent } from './nbts-other-services/anual-reports/anual-reports.component';
import { FunctionsOfBloodComponent } from './nbts-other-services/functions-of-blood/functions-of-blood.component';
import { WhoCanDonateBloodComponent } from './nbts-other-services/who-can-donate-blood/who-can-donate-blood.component';
import { LabSectionComponent } from './nbts-other-services/lab-section/lab-section.component';
import { TrainingSectionComponent } from './nbts-other-services/training-section/training-section.component';
import { WBD17Component } from './nbts-other-services/wbd17/wbd17.component';
import { Wbd16Component } from './nbts-other-services/wbd16/wbd16.component';
import { TermsOfReferenceComponent } from './nbts-other-services/terms-of-reference/terms-of-reference.component';
import { NewsAndEventsComponent } from './nbts-other-services/news-and-events/news-and-events.component';
import { AboutNbtsComponent } from './nbts-other-services/about-nbts/about-nbts.component';
import { RegisteredDonorsComponent } from './donee-facilities/registered-donors/registered-donors.component';
import { ContactRegisteredDonorsComponent } from './donee-facilities/contact-registered-donors/contact-registered-donors.component';
import { UpdateDoneeDetailsComponent } from './donee-facilities/update-donee-details/update-donee-details.component';
import { DoneeHeaderComponent } from './donee-facilities/donee-header/donee-header.component';
import { DonorHeaderComponent } from './donor-facilities/donor-header/donor-header.component';
import { ContactRequestedDoneeComponent } from './donor-facilities/contact-requested-donee/contact-requested-donee.component';
import { UpdateDonorDetailsComponent } from './donor-facilities/update-donor-details/update-donor-details.component';
import { MainAdminDashboardComponent } from './admin-facilities/main-admin-dashboard/main-admin-dashboard.component';
import { AdminHeaderComponent } from './admin-facilities/admin-header/admin-header.component';
import { ManageBloodStorageComponent } from './admin-facilities/manage-blood-storage/manage-blood-storage.component';
import { ViewBloodStorageComponent } from './admin-facilities/view-blood-storage/view-blood-storage.component';
import { AdminSideNavComponent } from './admin-facilities/admin-side-nav/admin-side-nav.component';
import { AddBloodStorageComponent } from './admin-facilities/add-blood-storage/add-blood-storage.component';
import { ViewBloodCampaignsComponent } from './organize-blood-campaign/view-blood-campaigns/view-blood-campaigns.component';
import { ManageBloodCampaignsComponent } from './admin-facilities/manage-blood-campaigns/manage-blood-campaigns.component';
import { HospitalLoginComponent } from './login/hospital-login/hospital-login.component';
import { HospitalFacilitiesComponent } from './hospital-facilities/hospital-facilities.component';
import { HospitalOrderBloodComponent } from './hospital-facilities/hospital-order-blood/hospital-order-blood.component';
import { ViewOrderComponent } from './hospital-facilities/view-order/view-order.component';
import { AddDonorsComponent } from './hospital-facilities/add-donors/add-donors.component';
import { AdminViewAppointmentsComponent } from './admin-facilities/admin-view-appointments/admin-view-appointments.component';
import { AdminAcceptDeleteAppointmentsComponent } from './admin-facilities/admin-accept-delete-appointments/admin-accept-delete-appointments.component';
import { DoneeRequestBloodComponent } from './donee-facilities/donee-request-blood/donee-request-blood.component';
import { HospitalRegisterComponent } from './register/hospital-register/hospital-register.component';
import { ManageRegisteredDonorsComponent } from './admin-facilities/manage-registered-donors/manage-registered-donors.component';
import { ManageRegisteredDoneeComponent } from './admin-facilities/manage-registered-donee/manage-registered-donee.component';
import { ViewDoneeRequestsComponent } from './donor-facilities/view-donee-requests/view-donee-requests.component';
import { ManageHopitalBloodOrdersComponent } from './admin-facilities/manage-hopital-blood-orders/manage-hopital-blood-orders.component';
import { HospitalHeaderComponent } from './hospital-facilities/hospital-header/hospital-header.component';
import { ViewBloodRequestComponent } from './donee-facilities/view-blood-request/view-blood-request.component';
import { UpdateBloodRequestComponent } from './donee-facilities/update-blood-request/update-blood-request.component';
import { UpdateBloodStorageComponent } from './admin-facilities/update-blood-storage/update-blood-storage.component';

import { HospitalService } from './shared/hospital.service';
import { AdminService } from './shared/admin.service';
import { DonorService } from './shared/donor.service';
import { DoneeService } from './shared/donee.service';
import { BloodInventoryService } from './shared/blood-inventory.service';
import { AppointmentService } from './shared/appointment.service';

//other
import { HospitalGuard } from './auth/hospital.guard';
import { HospitalInterceptor } from './auth/hospital.interceptor';
import { AdminGuard } from './auth/admin.guard';
import { AdminInterceptor } from './auth/admin.interceptor';
import { DonorGuard } from './auth/donor.guard';
import { DonorInterceptor } from './auth/donor.interceptor';
import { DoneeGuard } from './auth/donee.guard';
import { DoneeInterceptor } from './auth/donee.interceptor';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'other-blood-banks', component: OtherBloodBanksComponent},
  { path: 'admin-login', component: LoginComponent},
  { path: 'donor-login', component: DonorLoginComponent},
  { path: 'donee-login', component: DoneeLoginComponent},
  { path: 'donor-register', component: DonorRegisterComponent},
  { path: 'donee-register', component: DoneeRegisterComponent},
  { path: 'appointments', component: AppointmentsComponent,canActivate:[DonorGuard]},
  { path: 'nbts-other-services', component: NbtsOtherServicesComponent},
  { path: 'about-blood', component: AboutBloodComponent},
  { path: 'vission-mission', component: VissionMissionComponent},
  { path: 'our-journey', component: OurJourneyComponent},
  { path: 'organization-chart', component: OrganizationChartComponent},
  { path: 'performances-of-nbts', component: PerformancesOfNbtsComponent},
  { path: 'services-of-nbts', component: ServicesOfNbtsComponent},
  { path: 'organize-blood-campaign', component: OrganizeBloodCampaignComponent},
  { path: 'analyse-data', component: AnalyseDataComponent},
  { path: 'donor-facilities', component: DonorFacilitiesComponent,canActivate:[DonorGuard]},
  { path: 'donee-facilities', component: DoneeFacilitiesComponent,canActivate:[DoneeGuard]},
  { path: 'admin-facilities', component: AdminFacilitiesComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'other-web-components', component: OtherWebComponentsComponent},
  { path: 'book-appointments', component: BookAppointmentsComponent,canActivate:[DonorGuard]},
  { path: 'register-blood-campaign', component: RegisterBloodCampaignComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'blood-groups', component: BloodGroupsComponent},
  { path: 'donor-magazines', component: DonorMagazinesComponent},
  { path: 'news', component: NewsComponent},
  { path: 'anual-reports', component: AnualReportsComponent},
  { path: 'functions-of-blood', component: FunctionsOfBloodComponent},
  { path: 'who-can-donate-blood', component: WhoCanDonateBloodComponent},
  { path: 'lab-section', component: LabSectionComponent},
  { path: 'training-section', component: TrainingSectionComponent},
  { path: 'wbd17', component: WBD17Component},
  { path: 'wbd16', component: Wbd16Component},
  { path: 'terms-of-reference', component: TermsOfReferenceComponent},
  { path: 'news-and-events', component: NewsAndEventsComponent},
  { path: 'about-nbts', component: AboutNbtsComponent},
  { path: 'registered-donors', component: RegisteredDonorsComponent},
  { path: 'contact-registered-donors', component: ContactRegisteredDonorsComponent},
  { path: 'update-donee-details', component: UpdateDoneeDetailsComponent},
  { path: 'donee-header', component: DoneeHeaderComponent},
  { path: 'donor-header', component: DonorHeaderComponent,canActivate:[DonorGuard]},
  { path: 'contact-requested-donee', component: ContactRequestedDoneeComponent,canActivate:[DonorGuard]},
  { path: 'update-donor-details', component: UpdateDonorDetailsComponent,canActivate:[DonorGuard]},
  { path: 'main-admin-dashboard', component: MainAdminDashboardComponent,canActivate:[AdminGuard]},
  { path: 'admin-header', component: AdminHeaderComponent},
  { path: 'manage-blood-storage', component: ManageBloodStorageComponent},
  { path: 'view-blood-storage', component: ViewBloodStorageComponent},
  { path: 'admin-side-nav', component: AdminSideNavComponent},
  { path: 'add-blood-storage', component: AddBloodStorageComponent},
  { path: 'view-blood-campaigns', component: ViewBloodCampaignsComponent},
  { path: 'manage-blood-campaigns', component: ManageBloodCampaignsComponent},
  { path: 'hospital-login', component: HospitalLoginComponent},
  { path: 'hospital-facilities', component: HospitalFacilitiesComponent, canActivate:[HospitalGuard]},
  { path: 'hospital-order-blood', component: HospitalOrderBloodComponent},
  { path: 'view-order', component: ViewOrderComponent},
  { path: 'add-donors', component: AddDonorsComponent},
  { path: 'admin-view-appointments', component: AdminViewAppointmentsComponent},
  { path: 'admin-accept-delete-appointments', component: AdminAcceptDeleteAppointmentsComponent},
  { path: 'donee-request-blood', component: DoneeRequestBloodComponent},
  { path: 'hospital-register', component: HospitalRegisterComponent},
  { path: 'manage-registered-donors', component:   ManageRegisteredDonorsComponent},
  { path: 'manage-registered-donee', component:   ManageRegisteredDoneeComponent},
  { path: 'view-donee-requests', component:   ViewDoneeRequestsComponent},
  { path: 'manage-hopital-blood-orders', component:   ManageHopitalBloodOrdersComponent},
  { path: 'hospital-header', component:   HospitalHeaderComponent},
  { path: 'view-blood-request', component:   ViewBloodRequestComponent},
  { path: 'update-blood-request', component:   UpdateBloodRequestComponent},
  { path: 'update-blood-storage', component:   UpdateBloodStorageComponent},

];


@NgModule({

  declarations: [
      AppComponent,

      FooterComponent,
      NavbarComponent, 
      HomepageComponent,
      OtherBloodBanksComponent,
      LoginComponent,
      DonorLoginComponent,
      DoneeLoginComponent,
      DonorRegisterComponent,
      DoneeRegisterComponent,
      AppointmentsComponent,
      NbtsOtherServicesComponent,
      AboutBloodComponent,
      VissionMissionComponent,
      OurJourneyComponent,
      OrganizationChartComponent,
      PerformancesOfNbtsComponent,
      ServicesOfNbtsComponent,
      OrganizeBloodCampaignComponent,
      AnalyseDataComponent,
      DonorFacilitiesComponent,
      DoneeFacilitiesComponent,
      AdminFacilitiesComponent,
      RegisterComponent,
      OtherWebComponentsComponent,
      BookAppointmentsComponent,
      RegisterBloodCampaignComponent,
      ContactUsComponent,
      BloodGroupsComponent,
      DonorMagazinesComponent,
      NewsComponent,
      AnualReportsComponent,
      FunctionsOfBloodComponent,
      WhoCanDonateBloodComponent,
      LabSectionComponent,
      TrainingSectionComponent,
      WBD17Component,
      Wbd16Component,
      TermsOfReferenceComponent,
      NewsAndEventsComponent,
      AboutNbtsComponent,
      RegisteredDonorsComponent,
      ContactRegisteredDonorsComponent,
      UpdateDoneeDetailsComponent,
      DoneeHeaderComponent,
      DonorHeaderComponent,
      ContactRequestedDoneeComponent,
      UpdateDonorDetailsComponent,
      MainAdminDashboardComponent,
      AdminHeaderComponent,
      ManageBloodStorageComponent,
      ViewBloodStorageComponent,
      AdminSideNavComponent,
      AddBloodStorageComponent,
      ViewBloodCampaignsComponent,
      ManageBloodCampaignsComponent,
      HospitalLoginComponent,
      HospitalFacilitiesComponent,
      HospitalOrderBloodComponent,
      ViewOrderComponent,
      AddDonorsComponent,
      AdminViewAppointmentsComponent,
      AdminAcceptDeleteAppointmentsComponent,
      DoneeRequestBloodComponent,
      HospitalRegisterComponent,
      ManageRegisteredDonorsComponent,
      ManageRegisteredDoneeComponent,
      ViewDoneeRequestsComponent,
      ManageHopitalBloodOrdersComponent,
      HospitalHeaderComponent,
      ViewBloodRequestComponent,
      UpdateBloodRequestComponent,
      UpdateBloodStorageComponent,

  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({ apiKey: ''}),
    
  ],
  providers: 
  [ HospitalService,
    HospitalGuard,  
    {provide: HTTP_INTERCEPTORS, useClass: HospitalInterceptor,multi: true},
    AdminService,
    AdminGuard,  
    {provide: HTTP_INTERCEPTORS, useClass: AdminInterceptor,multi: true},
    DonorService,
    DonorGuard,  
    {provide: HTTP_INTERCEPTORS, useClass: DonorInterceptor,multi: true},
    DoneeService,
    DoneeGuard,  
    {provide: HTTP_INTERCEPTORS, useClass: DoneeInterceptor,multi: true},
    BloodInventoryService,
    AppointmentService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

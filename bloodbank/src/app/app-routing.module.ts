import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ContactRegisteredDoneeComponent } from './donor-facilities/contact-registered-donee/contact-registered-donee.component';
import { RegisteredDoneeComponent } from './donor-facilities/registered-donee/registered-donee.component';
import { UpdateDonorDetailsComponent } from './donor-facilities/update-donor-details/update-donor-details.component';
import { MainAdminDashboardComponent } from './admin-facilities/main-admin-dashboard/main-admin-dashboard.component';
import { SendNotificationComponent } from './admin-facilities/send-notification/send-notification.component';
import { AdminHeaderComponent } from './admin-facilities/admin-header/admin-header.component';
import { ManageBloodStorageComponent } from './admin-facilities/manage-blood-storage/manage-blood-storage.component';
import { ViewBloodStorageComponent } from './admin-facilities/view-blood-storage/view-blood-storage.component';
import { PostBloodDetailsComponent } from './admin-facilities/post-blood-details/post-blood-details.component';
import { PostBloodCampDetailsComponent } from './admin-facilities/post-blood-camp-details/post-blood-camp-details.component';
import { AdminSideNavComponent } from './admin-facilities/admin-side-nav/admin-side-nav.component';
import { AddBloodStorageComponent } from './admin-facilities/add-blood-storage/add-blood-storage.component';
import { ViewBloodCampaignsComponent } from './organize-blood-campaign/view-blood-campaigns/view-blood-campaigns.component';
import { ManageBloodCampaignsComponent } from './admin-facilities/manage-blood-campaigns/manage-blood-campaigns.component';
import { HospitalLoginComponent } from './login/hospital-login/hospital-login.component';
import { HospitalFacilitiesComponent } from './hospital-facilities/hospital-facilities.component';
import { HospitalOrderBloodComponent } from './hospital-facilities/hospital-order-blood/hospital-order-blood.component';
import { EditBloodRequestComponent } from './hospital-facilities/edit-blood-request/edit-blood-request.component';
import { ViewOrderComponent } from './hospital-facilities/view-order/view-order.component';
import { AddDonorsComponent } from './hospital-facilities/add-donors/add-donors.component';
import { ViewRegisteredDonorsComponent } from './donee-facilities/view-registered-donors/view-registered-donors.component';
import { AdminViewAppointmentsComponent } from './admin-facilities/admin-view-appointments/admin-view-appointments.component';
import { AdminAcceptDeleteAppointmentsComponent } from './admin-facilities/admin-accept-delete-appointments/admin-accept-delete-appointments.component';
import { DoneeRequestBloodComponent } from './donee-facilities/donee-request-blood/donee-request-blood.component';


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
  { path: 'appointments', component: AppointmentsComponent},
  { path: 'nbts-other-services', component: NbtsOtherServicesComponent},
  { path: 'about-blood', component: AboutBloodComponent},
  { path: 'vission-mission', component: VissionMissionComponent},
  { path: 'our-journey', component: OurJourneyComponent},
  { path: 'organization-chart', component: OrganizationChartComponent},
  { path: 'performances-of-nbts', component: PerformancesOfNbtsComponent},
  { path: 'services-of-nbts', component: ServicesOfNbtsComponent},
  { path: 'organize-blood-campaign', component: OrganizeBloodCampaignComponent},
  { path: 'analyse-data', component: AnalyseDataComponent},
  { path: 'donor-facilities', component: DonorFacilitiesComponent},
  { path: 'donee-facilities', component: DoneeFacilitiesComponent},
  { path: 'admin-facilities', component: AdminFacilitiesComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'other-web-components', component: OtherWebComponentsComponent},
  { path: 'book-appointments', component: BookAppointmentsComponent},
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
  { path: 'donor-header', component: DonorHeaderComponent},
  { path: 'contact-registered-donee', component: ContactRegisteredDoneeComponent},
  { path: 'registered-donee', component: RegisteredDoneeComponent},
  { path: 'update-donor-details', component: UpdateDonorDetailsComponent},
  { path: 'main-admin-dashboard', component: MainAdminDashboardComponent},
  { path: 'send-notification', component: SendNotificationComponent},
  { path: 'admin-header', component: AdminHeaderComponent},
  { path: 'manage-blood-storage', component: ManageBloodStorageComponent},
  { path: 'view-blood-storage', component: ViewBloodStorageComponent},
  { path: 'post-blood-details', component: PostBloodDetailsComponent},
  { path: 'post-blood-camp-details', component: PostBloodCampDetailsComponent},
  { path: 'admin-side-nav', component: AdminSideNavComponent},
  { path: 'add-blood-storage', component: AddBloodStorageComponent},
  { path: 'view-blood-campaigns', component: ViewBloodCampaignsComponent},
  { path: 'manage-blood-campaigns', component: ManageBloodCampaignsComponent},
  { path: 'hospital-login', component: HospitalLoginComponent},
  { path: 'hospital-facilities', component: HospitalFacilitiesComponent},
  { path: 'hospital-order-blood', component: HospitalOrderBloodComponent},
  { path: 'edit-blood-request', component: EditBloodRequestComponent},
  { path: 'view-order', component: ViewOrderComponent},
  { path: 'add-donors', component: AddDonorsComponent},
  { path: 'view-registered-donors', component: ViewRegisteredDonorsComponent},
  { path: 'admin-view-appointments', component: AdminViewAppointmentsComponent},
  { path: 'admin-accept-delete-appointments', component: AdminAcceptDeleteAppointmentsComponent},
  { path: 'donee-request-blood', component: DoneeRequestBloodComponent},
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
  ContactRegisteredDoneeComponent,
  RegisteredDoneeComponent,
  UpdateDonorDetailsComponent,
  MainAdminDashboardComponent,
  SendNotificationComponent,
  AdminHeaderComponent,
  ManageBloodStorageComponent,
  ViewBloodStorageComponent,
  PostBloodDetailsComponent,
  PostBloodCampDetailsComponent,
  AdminSideNavComponent,
  AddBloodStorageComponent,
  ViewBloodCampaignsComponent,
  ManageBloodCampaignsComponent,
  HospitalLoginComponent,
  HospitalFacilitiesComponent,
  HospitalOrderBloodComponent,
  EditBloodRequestComponent,
  ViewOrderComponent,
  AddDonorsComponent,
  ViewRegisteredDonorsComponent,
  AdminViewAppointmentsComponent,
  AdminAcceptDeleteAppointmentsComponent,
  DoneeRequestBloodComponent,

]

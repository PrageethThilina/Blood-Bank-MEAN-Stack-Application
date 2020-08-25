//built-In
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; // a plugin


//Angular materials
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';


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
import { HospitalManageAppointmentsComponent } from './hospital-facilities/hospital-manage-appointments/hospital-manage-appointments.component';
import { APositiveComponent } from './admin-facilities/admin-dashboard-components/a-positive/a-positive.component';
import { ANegativeComponent } from './admin-facilities/admin-dashboard-components/a-negative/a-negative.component';
import { BPositiveComponent } from './admin-facilities/admin-dashboard-components/b-positive/b-positive.component';
import { BNegativeComponent } from './admin-facilities/admin-dashboard-components/b-negative/b-negative.component';
import { AbPositiveComponent } from './admin-facilities/admin-dashboard-components/ab-positive/ab-positive.component';
import { AbNegativeComponent } from './admin-facilities/admin-dashboard-components/ab-negative/ab-negative.component';
import { OPositiveComponent } from './admin-facilities/admin-dashboard-components/o-positive/o-positive.component';
import { ONegativeComponent } from './admin-facilities/admin-dashboard-components/o-negative/o-negative.component';
import { DonorsCountComponent } from './admin-facilities/admin-dashboard-components/donors-count/donors-count.component';
import { DoneeRequestsCountComponent } from './admin-facilities/admin-dashboard-components/donee-requests-count/donee-requests-count.component';
import { PendingBloodCampaignsComponent } from './admin-facilities/admin-dashboard-components/pending-blood-campaigns/pending-blood-campaigns.component';
import { AcceptedBloodCampaignsComponent } from './admin-facilities/admin-dashboard-components/accepted-blood-campaigns/accepted-blood-campaigns.component';
import { PendingAppointmentsComponent } from './admin-facilities/admin-dashboard-components/pending-appointments/pending-appointments.component';
import { AcceptedAppointmentsComponent } from './admin-facilities/admin-dashboard-components/accepted-appointments/accepted-appointments.component';
import { FinishedAppointmentsComponent } from './admin-facilities/admin-dashboard-components/finished-appointments/finished-appointments.component';
import { HospitalBloodRequestCountComponent } from './admin-facilities/admin-dashboard-components/hospital-blood-request-count/hospital-blood-request-count.component';
import { AvailableBloodStorageChartComponent } from './admin-facilities/admin-dashboard-components/available-blood-storage-chart/available-blood-storage-chart.component';
import { HospitalBloodRequestTableComponent } from './admin-facilities/admin-dashboard-components/hospital-blood-request-table/hospital-blood-request-table.component';
import { ReceivedBloodStorageChartComponent } from './admin-facilities/admin-dashboard-components/received-blood-storage-chart/received-blood-storage-chart.component';
import { IssuedBloodStorageChartComponent } from './admin-facilities/admin-dashboard-components/issued-blood-storage-chart/issued-blood-storage-chart.component';
import { APositiveChartComponent } from './admin-facilities/blood-type-charts/a-positive-chart/a-positive-chart.component';
import { ANegativeChartComponent } from './admin-facilities/blood-type-charts/a-negative-chart/a-negative-chart.component';
import { BPositiveChartComponent } from './admin-facilities/blood-type-charts/b-positive-chart/b-positive-chart.component';
import { BNegativeChartComponent } from './admin-facilities/blood-type-charts/b-negative-chart/b-negative-chart.component';
import { AbPositveChartComponent } from './admin-facilities/blood-type-charts/ab-positve-chart/ab-positve-chart.component';
import { AbNegativeChartComponent } from './admin-facilities/blood-type-charts/ab-negative-chart/ab-negative-chart.component';
import { ONegativeChartComponent } from './admin-facilities/blood-type-charts/o-negative-chart/o-negative-chart.component';
import { OPositiveChartComponent } from './admin-facilities/blood-type-charts/o-positive-chart/o-positive-chart.component';
import { AdminAcceptedAppointmentsComponent } from './admin-facilities/admin-accepted-appointments/admin-accepted-appointments.component';
import { AdminFinishedAppointmentsComponent } from './admin-facilities/admin-finished-appointments/admin-finished-appointments.component';
import { DonorViewPreviousAppointmentComponent } from './appointments/donor-view-previous-appointment/donor-view-previous-appointment.component';
import { HospitalViewPreviousBloodRequestsComponent } from './hospital-facilities/hospital-view-previous-blood-requests/hospital-view-previous-blood-requests.component';
import { HospitalViewFinishedAppointmentsComponent } from './hospital-facilities/hospital-view-finished-appointments/hospital-view-finished-appointments.component';
import { HospitalFinishAppointmentsComponentComponent } from './hospital-facilities/hospital-finish-appointments-component/hospital-finish-appointments-component.component';
import { PendingBloodRequestCountComponent } from './hospital-facilities/hospital-dashoard-component/pending-blood-request-count/pending-blood-request-count.component';
import { AcceptedBloodRequestCountComponent } from './hospital-facilities/hospital-dashoard-component/accepted-blood-request-count/accepted-blood-request-count.component';
import { PendingAppointmentCountComponent } from './hospital-facilities/hospital-dashoard-component/pending-appointment-count/pending-appointment-count.component';
import { AcceptedAppointmentCountComponent } from './hospital-facilities/hospital-dashoard-component/accepted-appointment-count/accepted-appointment-count.component';
import { FinishedAppointmentCountComponent } from './hospital-facilities/hospital-dashoard-component/finished-appointment-count/finished-appointment-count.component';
import { BloodInventoryReportComponent } from './admin-facilities/reports/blood-inventory-report/blood-inventory-report.component';
import { DonorsReportComponent } from './admin-facilities/reports/donors-report/donors-report.component';
import { OtherReportsComponent } from './admin-facilities/reports/other-reports/other-reports.component';
import { CovidDashboardComponent } from './covid-dashboard/covid-dashboard.component';

import { HospitalService } from './shared/hospital.service';
import { AdminService } from './shared/admin.service';
import { DonorService } from './shared/donor.service';
import { DoneeService } from './shared/donee.service';
import { BloodInventoryService } from './shared/blood-inventory.service';
import { AppointmentService } from './shared/appointment.service';
import { HospitalBloodRequestService } from './shared/hospital-blood-request.service';
import { DoneeBloodRequestService } from './shared/donee-blood-request.service';
import { BloodCampaignsService } from './shared/blood-campaigns.service';
import { Covid19DashboardService } from './shared/covid-19-dashboard.service.service';

//other modules
import { ChatModule } from './chat-bot/chat/chat.module';

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
  { path: 'admin-facilities', component: AdminFacilitiesComponent,canActivate:[AdminGuard]},
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
  { path: 'registered-donors', component: RegisteredDonorsComponent,canActivate:[DoneeGuard]},
  { path: 'update-donee-details', component: UpdateDoneeDetailsComponent,canActivate:[DoneeGuard]},
  { path: 'donee-header', component: DoneeHeaderComponent,canActivate:[DoneeGuard]},
  { path: 'donor-header', component: DonorHeaderComponent,canActivate:[DonorGuard]},
  { path: 'contact-requested-donee', component: ContactRequestedDoneeComponent,canActivate:[DonorGuard]},
  { path: 'update-donor-details', component: UpdateDonorDetailsComponent,canActivate:[DonorGuard]},
  { path: 'main-admin-dashboard', component: MainAdminDashboardComponent,canActivate:[AdminGuard]},
  { path: 'admin-header', component: AdminHeaderComponent,canActivate:[AdminGuard]},
  { path: 'manage-blood-storage', component: ManageBloodStorageComponent,canActivate:[AdminGuard]},
  { path: 'view-blood-storage', component: ViewBloodStorageComponent,canActivate:[AdminGuard]},
  { path: 'admin-side-nav', component: AdminSideNavComponent,canActivate:[AdminGuard]},
  { path: 'add-blood-storage', component: AddBloodStorageComponent,canActivate:[AdminGuard]},
  { path: 'view-blood-campaigns', component: ViewBloodCampaignsComponent},
  { path: 'manage-blood-campaigns', component: ManageBloodCampaignsComponent,canActivate:[AdminGuard]},
  { path: 'hospital-login', component: HospitalLoginComponent},
  { path: 'hospital-facilities', component: HospitalFacilitiesComponent, canActivate:[HospitalGuard]},
  { path: 'hospital-order-blood', component: HospitalOrderBloodComponent,canActivate:[HospitalGuard]},
  { path: 'view-order', component: ViewOrderComponent,canActivate:[AdminGuard]},
  { path: 'add-donors', component: AddDonorsComponent},
  { path: 'admin-view-appointments', component: AdminViewAppointmentsComponent,canActivate:[AdminGuard]},
  { path: 'admin-accept-delete-appointments', component: AdminAcceptDeleteAppointmentsComponent},
  { path: 'donee-request-blood', component: DoneeRequestBloodComponent,canActivate:[DoneeGuard]},
  { path: 'hospital-register', component: HospitalRegisterComponent,canActivate:[AdminGuard]},
  { path: 'manage-registered-donors', component:   ManageRegisteredDonorsComponent,canActivate:[AdminGuard]},
  { path: 'manage-registered-donee', component:   ManageRegisteredDoneeComponent,canActivate:[AdminGuard]},
  { path: 'view-donee-requests', component:   ViewDoneeRequestsComponent,canActivate:[DonorGuard]},
  { path: 'manage-hopital-blood-orders', component:   ManageHopitalBloodOrdersComponent,canActivate:[AdminGuard]},
  { path: 'hospital-header', component:   HospitalHeaderComponent , canActivate:[HospitalGuard]},
  { path: 'view-blood-request', component:   ViewBloodRequestComponent,canActivate:[AdminGuard]},
  { path: 'update-blood-request', component:   UpdateBloodRequestComponent,canActivate:[DoneeGuard]},
  { path: 'update-blood-storage', component:   UpdateBloodStorageComponent,canActivate:[AdminGuard]},
  { path: 'hospital-manage-appointments', component:   HospitalManageAppointmentsComponent,canActivate:[HospitalGuard]},
  { path: 'a-positive', component: APositiveComponent},
  { path: 'a-negative', component: ANegativeComponent},
  { path: 'b-positive', component: BPositiveComponent},
  { path: 'b-negative', component: BNegativeComponent},
  { path: 'ab-positive', component: AbPositiveComponent},
  { path: 'ab-negative', component: AbNegativeComponent},
  { path: 'o-positive', component: OPositiveComponent},
  { path: 'o-negative', component: ONegativeComponent},
  { path: 'donors-count', component: DonorsCountComponent},
  { path: 'donee-requests-count', component: DoneeRequestsCountComponent},
  { path: 'pending-blood-campaigns', component: PendingBloodCampaignsComponent},
  { path: 'accepted-blood-campaigns', component: AcceptedBloodCampaignsComponent},
  { path: 'pending-appointments', component: PendingAppointmentsComponent},
  { path: 'accepted-appointments', component: AcceptedAppointmentsComponent},
  { path: 'finished-appointments', component: FinishedAppointmentsComponent},
  { path: 'hospital-blood-request-count', component: HospitalBloodRequestCountComponent},
  { path: 'available-blood-storage-chart', component: AvailableBloodStorageChartComponent},
  { path: 'hospital-blood-request-table', component: HospitalBloodRequestTableComponent},
  { path: 'received-blood-storage-chart', component: ReceivedBloodStorageChartComponent},
  { path: 'issued-blood-storage-chart', component: IssuedBloodStorageChartComponent},
  { path: 'a-positive-chart', component: APositiveChartComponent},
  { path: 'a-negative-chart', component: ANegativeChartComponent},
  { path: 'b-positive-chart', component: BPositiveChartComponent},
  { path: 'b-negative-chart', component: BNegativeChartComponent},
  { path: 'ab-positve-chart', component: AbPositveChartComponent},
  { path: 'ab-negative-chart', component: AbNegativeChartComponent},
  { path: 'o-positive-chart', component: ONegativeChartComponent},
  { path: 'o-negative-chart', component: OPositiveChartComponent},
  { path: 'admin-accepted-appointments', component: AdminAcceptedAppointmentsComponent,canActivate:[AdminGuard]},
  { path: 'admin-finished-appointments', component: AdminFinishedAppointmentsComponent,canActivate:[AdminGuard]},
  { path: 'donor-view-previous-appointment', component: DonorViewPreviousAppointmentComponent,canActivate:[DonorGuard]},
  { path: 'hospital-view-previous-blood-requests', component: HospitalViewPreviousBloodRequestsComponent,canActivate:[HospitalGuard]},
  { path: 'hospital-view-finished-appointments', component: HospitalViewFinishedAppointmentsComponent,canActivate:[HospitalGuard]},
  { path: 'hospital-finish-appointments-component', component: HospitalFinishAppointmentsComponentComponent,canActivate:[HospitalGuard]},
  { path: 'pending-blood-request-count', component: PendingBloodRequestCountComponent,canActivate:[HospitalGuard]},
  { path: 'accepted-blood-request-count', component: AcceptedBloodRequestCountComponent,canActivate:[HospitalGuard]},
  { path: 'pending-appointment-count', component: PendingAppointmentCountComponent,canActivate:[HospitalGuard]},
  { path: 'accepted-appointment-count', component: AcceptedAppointmentCountComponent,canActivate:[HospitalGuard]},
  { path: 'finished-appointment-count ', component: FinishedAppointmentCountComponent,canActivate:[HospitalGuard]},
  { path: 'blood-inventory-report', component: BloodInventoryReportComponent,canActivate:[AdminGuard]},
  { path: 'donors-report', component: DonorsReportComponent,canActivate:[AdminGuard]},
  { path: 'other-reports', component: OtherReportsComponent,canActivate:[AdminGuard]}, 
  { path: 'covid-dashboard', component: CovidDashboardComponent}, 

];

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
]);

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
      HospitalManageAppointmentsComponent,
      HospitalManageAppointmentsComponent,
      APositiveComponent,
      ANegativeComponent,
      BPositiveComponent,
      BNegativeComponent,
      AbPositiveComponent,
      AbNegativeComponent,
      OPositiveComponent,
      ONegativeComponent,
      DonorsCountComponent,
      DoneeRequestsCountComponent,
      PendingBloodCampaignsComponent,
      AcceptedBloodCampaignsComponent,
      PendingAppointmentsComponent,
      AcceptedAppointmentsComponent,
      FinishedAppointmentsComponent,
      HospitalBloodRequestCountComponent,
      AvailableBloodStorageChartComponent,
      HospitalBloodRequestTableComponent,
      ReceivedBloodStorageChartComponent,
      IssuedBloodStorageChartComponent,
      APositiveChartComponent,
      ANegativeChartComponent,
      BPositiveChartComponent,
      BNegativeChartComponent,
      AbPositveChartComponent,
      AbNegativeChartComponent,
      ONegativeChartComponent,
      OPositiveChartComponent,
      AdminAcceptedAppointmentsComponent,
      AdminFinishedAppointmentsComponent,
      DonorViewPreviousAppointmentComponent,
      HospitalViewPreviousBloodRequestsComponent,
      HospitalViewFinishedAppointmentsComponent,
      HospitalFinishAppointmentsComponentComponent,
      PendingBloodRequestCountComponent,
      AcceptedBloodRequestCountComponent,
      PendingAppointmentCountComponent,
      AcceptedAppointmentCountComponent,
      FinishedAppointmentCountComponent,
      BloodInventoryReportComponent,
      DonorsReportComponent,
      OtherReportsComponent,
      CovidDashboardComponent,

  ],
  imports: [
    
    ChatModule,
    GoogleChartsModule, 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MaterialFileInputModule,
    MatToolbarModule,
    MatExpansionModule,
    FullCalendarModule,
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
    HospitalBloodRequestService,
    DoneeBloodRequestService,
    BloodCampaignsService,
    Covid19DashboardService,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

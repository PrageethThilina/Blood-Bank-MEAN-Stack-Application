import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HospitalRegisterComponent } from './register/hospital-register/hospital-register.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HospitalRegisterComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

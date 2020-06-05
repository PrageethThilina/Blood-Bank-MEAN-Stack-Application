import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments: Appointment[];
  selectedAppointment: Appointment = {

    _id: '',
    location: '',
    date: '',
    time: '',

  };

  constructor(private http: HttpClient) { }

  //add an appointment
  postAppointment(appointment: Appointment){
    return this.http.post(environment.apiBaseUrl+'/book-appointments',appointment);
  }

  //get bloodbank appointments
  getAppointments() {
    return this.http.get(environment.apiBaseUrl + '/admin-view-appointmets');
  }

  //to get purticular Hospital appointments
  getHospitalAppointments() {
    return this.http.get(environment.apiBaseUrl + '/hospital-manage-appointments');
  }
  
  //to get purticular donors appointments
  getDonorsAppointments() {
    return this.http.get(environment.apiBaseUrl + '/appointments');
  }

  // To Get Appointment Details For Single Record Using Id
  getAppointment(_id) {
    return this.http.get( environment.apiBaseUrl + `/appointments/${_id}`);
  } 

  onAccept(_id){

  }

  onCancel(apnts,_id){

  }

  //admin delete appointments
  manageappointments(_id) {
    return this.http.get(environment.apiBaseUrl + `/admin-accept-delete-appointments/${_id}`);
  }
  
  //donor delete appointments 
  managedonorappointments(_id) {
    return this.http.get(environment.apiBaseUrl + `/appointments/${_id}`);
  }

}

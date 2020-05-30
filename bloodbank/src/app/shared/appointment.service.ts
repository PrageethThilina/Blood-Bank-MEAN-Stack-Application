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

  postAppointment(appointment: Appointment){
    return this.http.post(environment.apiBaseUrl+'/book-appointments',appointment);
  }

  getAppointments() {
    return this.http.get(environment.apiBaseUrl + '/admin-view-appointmets');
  }
  
  // To Get Employee Details For Single Record Using Id
  getAppointment(_id) {
    return this.http.get( environment.apiBaseUrl + `/appointments/${_id}`);
  } 

  manageappointments(_id) {
    return this.http.get(environment.apiBaseUrl + `/admin-accept-delete-appointments/${_id}`);
  }

}

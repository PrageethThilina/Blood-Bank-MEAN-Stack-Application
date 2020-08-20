import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Appointment } from './appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments: Appointment[];
  selectedAppointment: Appointment = {

    _id: '',
    donor_id: '',
    location: '',
    date: '',
    time: '',
    full_name: '',
    donor_nic: '',
    email: '',
    contact: '',
    status: '',

  };

  constructor(private http: HttpClient) { }

  //add an appointment
  postAppointment(appointment: Appointment){
    return this.http.post(environment.apiBaseUrl+'/book-appointments',appointment);
  }

  //get bloodbank appointments
  getAppointments() {
    return this.http.get(environment.apiBaseUrl+ '/admin-view-appointmets');
  }

  //get bloodbank appointments
  getPendingAppointments() {
    return this.http.get(environment.apiBaseUrl+ '/admin-accept-delete-appointments');
  }

  //get bloodbank accepted appointments
  getAcceptedAppointments() {
      return this.http.get(environment.apiBaseUrl+ '/admin-accepted-appointments');
  }

  //get bloodbank finished appointments
  getFinishedAppointments() {
    return this.http.get(environment.apiBaseUrl+ '/admin-finished-appointments');
  }

  //to get purticular Hospital appointments
  getHospitalAppointments() {
    return this.http.get(environment.apiBaseUrl + '/hospital-manage-appointments');
  }
  
  //to get purticular donors appointments
  getDonorsAppointments() {
    return this.http.get(environment.apiBaseUrl + '/appointments');
  }

  donorcancelAppointment(appointment: Appointment) {
    return this.http.post(environment.apiBaseUrl + `/appointments/${appointment._id}`, appointment);
  }

  //admin accept appointment
  onEdit(_id:string, status: string) {
    console.log(status);
    const statusobj = {_id:_id, status:status}
    return this.http.post(environment.apiBaseUrl + `/admin-accept-delete-appointments/${statusobj._id}`, statusobj);
  }

  //admin accept appointment
  onFinished(_id:string, status: string) {
      console.log(status);
      const statusobj = {_id:_id, status:status}
      return this.http.post(environment.apiBaseUrl + `/admin-accepted-appointments/${statusobj._id}`, statusobj);
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


  getAppointmentCount():Observable<any> {
    return this.http.get<{count:number}>(environment.apiBaseUrl + '/pending-appointments');
  }

  getAcceptedAppointmentCount():Observable<any> {
    return this.http.get<{count:number}>(environment.apiBaseUrl + '/accepted-appointments');
  }

  getfinishedAppointmentCount():Observable<any> {
    return this.http.get<{count:number}>(environment.apiBaseUrl + '/finished-appointments');
  }

}

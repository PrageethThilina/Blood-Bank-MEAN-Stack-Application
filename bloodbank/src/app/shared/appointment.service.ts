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
  postAppointment(appointment: Appointment) {
    return this.http.post(environment.apiBaseUrl + '/book-appointments', appointment);
  }

  //get bloodbank appointments
  getAppointments() {
    return this.http.get(environment.apiBaseUrl + '/admin-view-appointmets');
  }

  //get bloodbank pending appointments
  getPendingAppointments() {
    return this.http.get(environment.apiBaseUrl + '/admin-accept-delete-appointments');
  }

  //get bloodbank accepted appointments
  getAcceptedAppointments() {
    return this.http.get(environment.apiBaseUrl + '/admin-accepted-appointments');
  }

  //get bloodbank finished appointments
  getFinishedAppointments() {
    return this.http.get(environment.apiBaseUrl + '/admin-finished-appointments');
  }

  //admin accept appointment
  onEdit(_id: string, status: string) {
    console.log(status);
    const statusobj = { _id: _id, status: status }
    return this.http.post(environment.apiBaseUrl + `/admin-accept-delete-appointments/${statusobj._id}`, statusobj);
  }

  //admin accept appointment
  onFinished(_id: string, status: string) {
    console.log(status);
    const statusobj = { _id: _id, status: status }
    return this.http.post(environment.apiBaseUrl + `/admin-accepted-appointments/${statusobj._id}`, statusobj);
  }


  //admin delete appointments
  manageappointments(_id) {
    return this.http.delete(environment.apiBaseUrl + `/admin-accept-delete-appointments/${_id}`);
  }

  //to get purticular Hospital pending appointments
  getHospitalAppointments(location: string) {
    return this.http.get(environment.apiBaseUrl + `/hospital-manage-appointments/${location}`);
  }

  //to get purticular Hospital Accepted appointments
  getHospitalAcceptedAppointments(location: string) {
    return this.http.get(environment.apiBaseUrl + `/hospital-finish-appointments-component/${location}`);
  }

  //to get purticular Hospital finished appointments
  getHospitalFinishedAppointments(location: string) {
    return this.http.get(environment.apiBaseUrl + `/hospital-view-finished-appointments/${location}`);
  }

  //hospital delete pending appointments
  hospital_delete_pending_appointments(_id) {
    return this.http.delete(environment.apiBaseUrl + `/hospital-manage-appointments/${_id}`);
  }

  //hospital delete accepted appointments
  hospital_delete_accepted_appointments(_id) {
    return this.http.delete(environment.apiBaseUrl + `/hospital-finish-appointments-component/${_id}`);
  }

  //admin accept appointment
  on_hospital_Accept(_id: string, status: string) {
    // console.log(status);
    const statusobj = { _id: _id, status: status }
    return this.http.post(environment.apiBaseUrl + `/hospital-manage-appointments/${statusobj._id}`, statusobj);
  }

  //admin accept appointment
  on_hospital_Finish(_id: string, status: string) {
    console.log(status);
    const statusobj = { _id: _id, status: status }
    return this.http.post(environment.apiBaseUrl + `/hospital-finish-appointments-component/${statusobj._id}`, statusobj);
  }

  //to get purticular donors appointments
  getDonorsAppointment(id: string) {
    return this.http.get(environment.apiBaseUrl + `/appointments/${id}`);
  }

  //to get purticular donors previous appointments
  getDonorsPreviousAppointments(id: string) {
    return this.http.get(environment.apiBaseUrl + `/donor-view-previous-appointment/${id}`);
  }

  //donor delete appointments 
  managedonorappointments(_id) {
    return this.http.delete(environment.apiBaseUrl + `/appointments/${_id}`);
  }

  getAppointmentCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/pending-appointments');
  }

  getAcceptedAppointmentCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/accepted-appointments');
  }

  getfinishedAppointmentCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/finished-appointments');
  }

  gethospitalpendingAppointmentCount(location: string): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + `/pending-appointment-count/${location}`);
  }

  gethospitalAcceptedAppointmentCount(location: string): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + `/accepted-appointment-count/${location}`);
  }

  gethospitalfinishedAppointmentCount(location: string): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + `/finished-appointment-count/${location}`);
  }

}

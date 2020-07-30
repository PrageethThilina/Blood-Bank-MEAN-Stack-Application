import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Donor } from './donor.model';


@Injectable({
  providedIn: 'root'
})
export class DonorService {

  dnrs: Donor[];
  selectedUser: Donor = {
    _id : '',
    donor_nic : '', 
    full_name : '',
    gender : '',
    birthday : '',
    last_donate_date : '',
    province : '',
    district : '',
    weight : '',
    height : '',
    blood_group : '',
    address : '',
    email : '',
    contact : '',
    password : '',
    spouce : '',
    health : '',
    photo : '',
    profile_status: '',
  };

noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

constructor(private http: HttpClient) { }

//HttpMethods

postUser(donor: Donor){
  return this.http.post(environment.apiBaseUrl+'/donor-register',donor,this.noAuthHeader);
}

getDonorList() {
  return this.http.get(environment.apiBaseUrl+ '/registered-donors');
}

login(authCredentials) {
  return this.http.post(environment.apiBaseUrl + '/donor-login', authCredentials,this.noAuthHeader);
}

getUserProfile() {
  return this.http.get(environment.apiBaseUrl + '/donor-facilities');
}

updateDonor(donor: Donor) {
  return this.http.post(environment.apiBaseUrl + `/update-donor-details/${donor._id}`, donor);
}

insertRecords(donor: Donor) {
  return this.http.post(environment.apiBaseUrl + `/book-appointments/${donor._id}`, donor);
}

deleteDonor(_id) {
  return this.http.get(environment.apiBaseUrl + `/manage-registered-donors/${_id}`);
}

// getAppointment(_id) {
//   return this.http.get( environment.apiBaseUrl + `/appointments/${_id}`);
// }

//Helper Methods

setToken(token: string) {
  localStorage.setItem('token', token);
}

getToken() {
  return localStorage.getItem('token');
}

deleteToken() {
  localStorage.removeItem('token');
}

getUserPayload() {
  var token = this.getToken();
  if (token) {
    var userPayload = atob(token.split('.')[1]);
    return JSON.parse(userPayload);
  }
  else
    return null;
}

isLoggedIn() {
  var userPayload = this.getUserPayload();
  if (userPayload)
    return userPayload.exp > Date.now() / 1000;
  else
    return false;
}

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Donee } from './donee.model';

@Injectable({
  providedIn: 'root'
})

export class DoneeService {

  selectedUser: Donee = {
    donee_nic : '', 
    full_name : '',
    gender : '',
    birthday : '',
    city : '',
    contact : '',
    email : '',
    blood_group : '',
    address : '',
    password : '',
    spouce : '',
    health : '',
    medical_report : '',
  };

noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

constructor(private http: HttpClient) { }

//HttpMethods

postUser(donee: Donee){
  return this.http.post(environment.apiBaseUrl+'/donee-register',donee,this.noAuthHeader);
}

login(authCredentials) {
  return this.http.post(environment.apiBaseUrl + '/donee-login', authCredentials,this.noAuthHeader);
}

getUserProfile() {
  return this.http.get(environment.apiBaseUrl + '/donee-facilities');
}


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

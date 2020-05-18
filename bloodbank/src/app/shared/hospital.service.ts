import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Hospital } from './hospital.model';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  selectedUser: Hospital = {
    hospital_name : '',
    address : '',
    contact : '',
    email : '',
    username : '',
    password : '',
  };

noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

constructor(private http: HttpClient) { }

//HttpMethods

postUser(hospital: Hospital){
  return this.http.post(environment.apiBaseUrl+'/hospital-register',hospital,this.noAuthHeader);
}

login(authCredentials) {
  return this.http.post(environment.apiBaseUrl + '/hospital-login', authCredentials,this.noAuthHeader);
}

getUserProfile() {
  return this.http.get(environment.apiBaseUrl + '/hospital-facilities');
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

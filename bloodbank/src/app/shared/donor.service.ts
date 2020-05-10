import { Injectable } from '@angular/core';
import { Donor } from './donor.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  selectedUser: Donor = {
    donor_id : '',
    nic : '',
    full_name : '',
    gender : '',
    birthday : '',
    last_donate_date : '',
    city : '',
    weight : '',
    height : '',
    blood_group : '',
    address : '',
    email : '',
    contact : '',
    password : '',
    re_password : '',
    spouce : '',
    health : '',
    photo : '',

  };

  constructor(public http: HttpClient) { }

    //HttpMethods
    postDonor(donor: Donor){
      return this.http.post(environment.apiBaseUrl+'/donor-register',donor);
    }

}

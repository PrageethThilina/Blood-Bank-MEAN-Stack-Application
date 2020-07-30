import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HospitalBloodRequest } from './hospital-blood-request.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalBloodRequestService {

  hospitalbloodrequests: HospitalBloodRequest[];
  selectedhospitalbloodrequest: HospitalBloodRequest = {

    _id: '',
    blood_group: '',
    quantity: '',
    order_status: '',

  };

  constructor(private http: HttpClient) { }

    //request blood order
    postBloodOrder(hospitalbloodrequest: HospitalBloodRequest){
      return this.http.post(environment.apiBaseUrl+'/hospital-order-blood',hospitalbloodrequest);
    }

    //to get purticular hspital orders
    getHospitalOrders() {
      return this.http.get(environment.apiBaseUrl + '/hospital-order-blood');
    }

    //hospital cancel orders 
    hospital_cancel_order(_id) {
      return this.http.get(environment.apiBaseUrl + `/hospital-order-blood/${_id}`);
    }
    
}

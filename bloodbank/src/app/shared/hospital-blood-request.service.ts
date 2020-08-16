import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HospitalBloodRequest } from './hospital-blood-request.model';
import { Observable } from 'rxjs';

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

    //to get purticular hspital orders
    getHospitalBloodRequests() {
      return this.http.get(environment.apiBaseUrl + '/manage-hopital-blood-orders');
    }

    //to get purticular pending hspital orders
    getPendingHospitalBloodRequests() {
      return this.http.get(environment.apiBaseUrl + '/hospital-blood-request-table');
    }
    
    //hospital cancel orders 
    onDelete(_id) {
      return this.http.get(environment.apiBaseUrl + `/manage-hopital-blood-orders/${_id}`);
    }

    get_hospital_blood_request_count():Observable<any> {
      return this.http.get<{count:number}>(environment.apiBaseUrl + '/hospital-blood-request-count');
    }
    
}

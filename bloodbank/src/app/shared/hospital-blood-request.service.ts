import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HospitalBloodRequest } from './hospital-blood-request.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalBloodRequestService {

  hospitalbloodrequest: HospitalBloodRequest[];
  selectedhospitalbloodrequest: HospitalBloodRequest = {

    _id: '',
    date: '',
    contact: '',
    email: '',
    blood_group: '',
    quantity: '',

  };

  constructor(private http: HttpClient) { }

    //request blood order
    postBloodOrder(hospitalbloodrequest: HospitalBloodRequest){
      return this.http.post(environment.apiBaseUrl+'/hospital-order-blood',hospitalbloodrequest);
    }

}

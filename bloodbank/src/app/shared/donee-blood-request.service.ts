import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { DoneeBloodRequest } from './donee-blood-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoneeBloodRequestService {

  doneebloodrequests: DoneeBloodRequest[];
  selecteddoneebloodrequest: DoneeBloodRequest = {

    _id: '',
    donee_id: '',
    donee_nic: '',
    full_name: '',
    gender: '',
    birthday: '',
    province: '',
    district: '',
    contact: '',
    email: '',
    blood_group: '',
    address: '',
    spouce: '',
    health: '',
    medical_report: '',

  };

  constructor(private http: HttpClient) { }

  //request blood 
  postBloodRequest(doneebloodrequest: DoneeBloodRequest) {
    return this.http.post(environment.apiBaseUrl + '/donee-request-blood', doneebloodrequest);
  }

  //to get purticular donee requests
  getDoneeOrders(donee_id: string) {
    return this.http.get(environment.apiBaseUrl + `/view-blood-request/${donee_id}`);
  }

  //donee cancel orders 
  donee_cancel_request(_id) {
    return this.http.delete(environment.apiBaseUrl + `/view-blood-request/${_id}`);
  }

  //donee found request
  onSuccess(_id: string, status: string) {
    console.log(status);
    const statusobj = { _id: _id, status: status }
    return this.http.post(environment.apiBaseUrl + `/view-blood-request/${statusobj._id}`, statusobj);
  }

  updateBloodRequest(doneebloodrequest: DoneeBloodRequest) {
    return this.http.post(environment.apiBaseUrl + `/update-blood-request/${doneebloodrequest._id}`, doneebloodrequest);
  }

  sendEmailtoDonee(doneebloodrequest: DoneeBloodRequest) {
    return this.http.post(environment.apiBaseUrl + '/view-donee-requests', doneebloodrequest);
  }

  //to get purticular donee requests
  getAllDoneeOrders() {
    return this.http.get(environment.apiBaseUrl + '/view-donee-requests');
  }

  get_donee_blood_requests(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/donee-requests-count');
  }
}

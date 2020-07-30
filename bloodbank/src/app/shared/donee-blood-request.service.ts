import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { DoneeBloodRequest } from './donee-blood-request.model';

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
      postBloodRequest(doneebloodrequest: DoneeBloodRequest){
        return this.http.post(environment.apiBaseUrl+'/donee-request-blood',doneebloodrequest);
      }
  
      //to get purticular donee requests
      getDoneeOrders() {
        return this.http.get(environment.apiBaseUrl + '/donee-request-blood');
      }

      //to get purticular donee requests
      getAllDoneeOrders() {
        return this.http.get(environment.apiBaseUrl + '/view-donee-requests');
      }
  
      //donee cancel orders 
      donee_cancel_request(_id) {
        return this.http.get(environment.apiBaseUrl + `/view-donee-requests/${_id}`);
      }

      updateBloodRequest(doneebloodrequest: DoneeBloodRequest) {
        return this.http.post(environment.apiBaseUrl + `/update-blood-request/${doneebloodrequest._id}`, doneebloodrequest);
      }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BloodInventory } from './blood-inventory.model';

@Injectable({
  providedIn: 'root'
})
export class BloodInventoryService {
 
  blood_inventories: BloodInventory[];
  selectedBloodInventory: BloodInventory = {

    _id: '',
    blood_group: '',
    volume: '',
    received_date: '',
    expiry_date: '',

  };

  constructor(private http: HttpClient) { }

  postBloodStorage(bloodinventory: BloodInventory){
    return this.http.post(environment.apiBaseUrl+'/add-blood-storage',bloodinventory);
  }

  getBloodStorage() {
    return this.http.get(environment.apiBaseUrl + '/view-blood-storage');
  }
  
  // To Get Employee Details For Single Record Using Id
  getBloodBagById(_id) {
    return this.http.get( environment.apiBaseUrl + `/add-blood-storage/${_id}`);
  } 

  putBloodStorage(bloodinventory: BloodInventory) {
    return this.http.post(environment.apiBaseUrl + `/update-blood-storage/${bloodinventory._id}`, bloodinventory);
  }

  deleteBloodStorage(_id) {
    return this.http.get(environment.apiBaseUrl + `/manage-blood-storage/${_id}`);
  }

}

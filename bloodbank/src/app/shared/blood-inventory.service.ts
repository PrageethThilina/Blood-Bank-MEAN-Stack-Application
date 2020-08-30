import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BloodInventory } from './blood-inventory.model';
import { Observable } from 'rxjs';

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

  postBloodStorage(bloodinventory: BloodInventory) {
    return this.http.post(environment.apiBaseUrl + '/add-blood-storage', bloodinventory);
  }

  getBloodStorage() {
    return this.http.get(environment.apiBaseUrl + '/view-blood-storage');
  }

  // To Get Inventory Details For Single Record Using Id
  getBloodBagById(_id) {
    return this.http.get(environment.apiBaseUrl + `/add-blood-storage/${_id}`);
  }

  putBloodStorage(bloodinventory: BloodInventory) {
    return this.http.post(environment.apiBaseUrl + `/update-blood-storage/${bloodinventory._id}`, bloodinventory);
  }

  deleteBloodStorage(_id) {
    return this.http.get(environment.apiBaseUrl + `/manage-blood-storage/${_id}`);
  }

  get_A_Positive_BloodCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/a-positive');
  }

  get_A_Negative_BloodCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/a-negative');
  }

  get_B_Positive_BloodCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/b-positive');
  }

  get_B_Negative_BloodCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/b-negative');
  }

  get_AB_Positive_BloodCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/ab-positive');
  }

  get_AB_Negative_BloodCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/ab-negative');
  }

  get_O_Positive_BloodCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/o-positive');
  }

  get_O_Negative_BloodCount(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/o-negative');
  }

  get_A_Positive_BloodCount_Chart(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/a-positive-chart');
  }

  get_A_Negative_BloodCount_Chart(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/a-negative-chart');
  }

  get_B_Positive_BloodCount_Chart(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/b-positive-chart');
  }

  get_B_Negative_BloodCount_Chart(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/b-negative-chart');
  }

  get_AB_Positive_BloodCount_Chart(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/ab-positve-chart');
  }

  get_AB_Negative_BloodCount_Chart(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/ab-negative-chart');
  }

  get_O_Positive_BloodCount_Chart(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/o-positive-chart');
  }

  get_O_Negative_BloodCount_Chart(): Observable<any> {
    return this.http.get<{ count: number }>(environment.apiBaseUrl + '/o-negative-chart');
  }

}

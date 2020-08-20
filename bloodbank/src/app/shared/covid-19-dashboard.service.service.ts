import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Covid19DashboardService {

   url = "https://hpb.health.gov.lk/api/get-current-statistical";

  constructor() { }

}

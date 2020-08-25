import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class Covid19DashboardService {


  constructor(private http :HttpClient) { }

  getStatistics():Observable<any>{
      return this.http.get<{data:any}>("https://hpb.health.gov.lk/api/get-current-statistical");
  }

 // <{count:number}>

}

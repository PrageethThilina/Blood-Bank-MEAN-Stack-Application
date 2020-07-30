import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BloodCampaigns } from './blood-campaigns.model';

const apiUrl = 'http://localhost:3000/api/register-blood-campaigns';
const apiviewUrl = 'http://localhost:3000/api/view-blood-campaigns';

@Injectable({
  providedIn: 'root'
})
export class BloodCampaignsService {

  constructor(private http: HttpClient) { }

  bloodcampaigns: BloodCampaigns[];

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getPosts(): Observable<any> {
    const viewurl = `${apiviewUrl}`;
    return this.http.get<BloodCampaigns>(viewurl).pipe(
      catchError(this.handleError)
    );
  }

  addPost(bloodcampaigns: BloodCampaigns, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('province', bloodcampaigns.province);
    formData.append('district', bloodcampaigns.district);
    formData.append('address', bloodcampaigns.address);
    formData.append('organiser', bloodcampaigns.organiser);
    formData.append('date', bloodcampaigns.date);
    formData.append('time', bloodcampaigns.time);
    formData.append('contact', bloodcampaigns.contact);
    formData.append('email', bloodcampaigns.email);
    const header = new HttpHeaders();
    const params = new HttpParams();
  
    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('POST', apiUrl, formData, options);
    return this.http.request(req);
  }

}

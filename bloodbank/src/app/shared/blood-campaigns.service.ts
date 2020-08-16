import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from '../../environments/environment';
import { BloodCampaigns } from './blood-campaigns.model';

@Injectable({
  providedIn: 'root'
})
export class BloodCampaignsService {

  posts: BloodCampaigns[]
  private postsUpdated = new Subject<BloodCampaigns[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/view-blood-campaigns")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              _id: post._id,
              province: post.province,
              district: post.district,
              address: post.address,
              organiser: post.organiser,
              date: post.date,
              time: post.time,
              contact: post.contact,
              email: post.email,
              created: post.created,
              imagePath: post.imagePath
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  get_Posts_Admin() {
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/manage-blood-campaigns")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              _id: post._id,
              province: post.province,
              district: post.district,
              address: post.address,
              organiser: post.organiser,
              date: post.date,
              time: post.time,
              contact: post.contact,
              email: post.email,
              created: post.created,
              status: post.status,
              imagePath: post.imagePath
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostsInhomepage() {
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/homepage")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              _id: post._id,
              province: post.province,
              district: post.district,
              address: post.address,
              organiser: post.organiser,
              date: post.date,
              time: post.time,
              contact: post.contact,
              email: post.email,
              created: post.created,
              imagePath: post.imagePath
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(_id: string) {
    return this.http.get<{ _id: string, province: string, district: string,address: string, organiser: string,date: string, time: string,contact: string, email: string,created: string,status: string, imagePath: string }>(
      "http://localhost:3000/api/view-blood-campaigns/" + _id
    );
  }

  addPost(province: string, district: string,address: string, organiser: string,date: string, time: string,contact: string, email: string,created: string, image: File) {
    const postData = new FormData();
    postData.append("province", province);
    postData.append("district", district);
    postData.append("address", address);
    postData.append("organiser", organiser);
    postData.append("date", date);
    postData.append("time", time);
    postData.append("contact", contact);
    postData.append("email", email);
    postData.append("created", created);
    postData.append("image", image);
    this.http  .post<{ message: string; post: BloodCampaigns }>("http://localhost:3000/api/register-blood-campaign", postData )
      .subscribe(responseData => {
        const post: BloodCampaigns = {
          _id: responseData.post._id,
          province: province,
          district: district,
          address: address,
          organiser: organiser,
          date: date,
          time: time,
          contact: contact,
          email: email,
          created: created,
          imagePath: responseData.post.imagePath,
          status: status,
        };
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        setTimeout(() => this.router.navigateByUrl('/view-blood-campaigns'), 2500);
      });
  }

  updatePost(_id: string,province: string, district: string,address: string, organiser: string,date: string, time: string,contact: string, email: string,created: string, image: File | string) {
    let postData: BloodCampaigns | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("_id", _id);
      postData.append("province", province);
      postData.append("district", district);
      postData.append("address", address);
      postData.append("organiser", organiser);
      postData.append("date", date);
      postData.append("time", time);
      postData.append("contact", contact);
      postData.append("email", email);
      postData.append("created", created);
      postData.append("image", image);
    } else {
      postData = {
        _id: _id,
        province: province,
        district: district,
        address: address,
        organiser: organiser,
        date: date,
        time: time,
        contact: contact,
        email: email,
        created: created,
        status: status,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/register-blood-campaign/" + _id, postData)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p._id === _id);
        const post: BloodCampaigns = {
          _id: _id,
          province: province,
          district: district,
          address: address,
          organiser: organiser,
          date: date,
          time: time,
          contact: contact,
          email: email,
          created: created,
          status: status,
          imagePath: ""
        };
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        setTimeout(() => this.router.navigateByUrl('/view-blood-campaigns'), 2500);
      });
  }

  //admin delete blood campaigns
  deletePost(_id) {
    return this.http.get(environment.apiBaseUrl + `/manage-blood-campaigns/${_id}`);
  }

  pending_blood_campaigns():Observable<any> {
    return this.http.get<{count:number}>(environment.apiBaseUrl + '/pending-blood-campaigns');
  }

  accepted_blood_campaigns():Observable<any> {
    return this.http.get<{count:number}>(environment.apiBaseUrl + '/accepted-blood-campaigns');
  }

}

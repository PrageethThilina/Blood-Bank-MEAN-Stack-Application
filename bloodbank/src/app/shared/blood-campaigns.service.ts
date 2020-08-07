import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

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
              id: post._id,
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

  getPostsInhomepage() {
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/homepage")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              id: post._id,
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

  getPost(id: string) {
    return this.http.get<{ _id: string, province: string, district: string,address: string, organiser: string,date: string, time: string,contact: string, email: string,created: string, imagePath: string }>(
      "http://localhost:3000/api/view-blood-campaigns/" + id
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
          id: responseData.post.id,
          province: province,
          district: district,
          address: address,
          organiser: organiser,
          date: date,
          time: time,
          contact: contact,
          email: email,
          created: created,
          imagePath: responseData.post.imagePath
        };
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        setTimeout(() => this.router.navigateByUrl('/view-blood-campaigns'), 2500);
      });
  }

  updatePost(id: string,province: string, district: string,address: string, organiser: string,date: string, time: string,contact: string, email: string,created: string, image: File | string) {
    let postData: BloodCampaigns | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
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
        id: id,
        province: province,
        district: district,
        address: address,
        organiser: organiser,
        date: date,
        time: time,
        contact: contact,
        email: email,
        created: created,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/register-blood-campaign/" + id, postData)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
        const post: BloodCampaigns = {
          id: id,
          province: province,
          district: district,
          address: address,
          organiser: organiser,
          date: date,
          time: time,
          contact: contact,
          email: email,
          created: created,
          imagePath: ""
        };
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        setTimeout(() => this.router.navigateByUrl('/view-blood-campaigns'), 2500);
      });
  }

  deletePost(postId: string) {
    this.http
      .delete("http://localhost:3000/api/manage-blood-campaigns" + postId)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
}

import { Injectable } from '@angular/core';
import {Website} from './model/Website';

import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  baseUrl = environment.baseUrl;
  websiteApiUrl='/api/website/';
  userApiUrl = '/api/user/';

  constructor(private http: HttpClient) { }
  createWebsite(website, userId){
    console.log("front website service createWebsite() called");
    return this.http.post<Website>(
      this.baseUrl + this.userApiUrl + userId + '/website', 
      website);
  }

  findWebsitesByUser(userId): Observable<Website[]>{
    console.log("front website service findWebsiteByUser() called");
    return this.http.get<Website[]>(this.baseUrl + this.userApiUrl + userId + '/website');

  }
  
  findWebsiteById(websiteId){
    console.log("front website service findwebsiteById() called");
    // Only need to call server's url to get the data.
    return this.http.get<Website>(this.baseUrl + this.websiteApiUrl + websiteId);


  }

  updateWebsite(websiteId, website) {
    console.log("front website service updateWebsite() called");
    return this.http.put<Website>(this.baseUrl + this.websiteApiUrl + websiteId, website);
  }

  deleteWebsite(websiteId){
    console.log("front website service deleteWebsite() called");
    return this.http.delete<Website>(this.baseUrl + this.websiteApiUrl + websiteId);
  }

}

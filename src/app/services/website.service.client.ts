import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class WebsiteService {

  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createWebsite(userId, website): Observable<any> {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post<any>(url, website);
  }

  findWebsitesByUser(userId: string): Observable<any[]> {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get<any[]>(url);
  }

  findWebsiteById(websiteId): Observable<any> {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get<any>(url);
  }

  updateWebsite(websiteId, website): Observable<any> {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put<any>(url, website);
  }

  deleteWebsite(websiteId): Observable<any> {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete<any>(url);
  }


}

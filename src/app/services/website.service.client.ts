import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class WebsiteService {

  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;

  static getNewWebsite() {
    return new Website(undefined, undefined, undefined, undefined);
  }

  createWebsite(userId: String, website: Website) {
    return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  findWebsitesByUser(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  findWebsitesById(websiteId: String) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  updateWebsite(websiteId: String, website: Website) {
    return this._http.put(this.baseUrl + '/api/website/' + websiteId, website);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  deleteWebsite(websiteId: String) {
    return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
      // .pipe(map(
      //   (res: any) => res.json()));
  }
}

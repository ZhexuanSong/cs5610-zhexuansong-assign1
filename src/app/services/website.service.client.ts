import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class WebsiteService {
  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;
  websites: Website[] = [
    {'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem'}

  ];

  createWebsite(userId, website: Website) {
    return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
  }

  findAllWebsitesForUser(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
  }

  findWebsiteById(websiteId) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId);
  }

  updateWebsite(websiteId, website) {
    return this._http.put(this.baseUrl + '/api/website/' + websiteId, website);
  }

  deleteWebsite(websiteId) {
    return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
  }
}

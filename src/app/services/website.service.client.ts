import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class WebsiteService {
  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createWebsite(userId, website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteByUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWebsite(websiteId, website) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, website).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}

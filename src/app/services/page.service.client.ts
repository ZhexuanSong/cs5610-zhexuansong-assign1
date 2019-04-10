import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class PageService {
  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createPage(websiteId: String, page: Page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page).map((response: Response) => {
      return response.json();
    });
  }

  findPageByWebsiteId(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findPageById(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updatePage(pageId: String, page: Page) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.put(url, page).map((response: Response) => {
      return response.json();
    });
  }

  deletePage(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}

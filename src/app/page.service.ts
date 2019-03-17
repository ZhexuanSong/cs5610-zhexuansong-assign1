import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Page} from './model/Page';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  baseUrl = environment.baseUrl;
  pageApiUrl = '/api/page/';
  websiteApiUrl = '/api/website/';

  constructor(private http: HttpClient) { }
  createPage(page, websiteId) {
    console.log('front page service createPage() called');
    return this.http.post<Page>(
      this.baseUrl + this.websiteApiUrl + websiteId + '/page',
      page);
  }

  findPagesByWebsite(websiteId): Observable<Page[]> {
    console.log('front page service findPageByWebsite() called');
    return this.http.get<Page[]>(this.baseUrl + this.websiteApiUrl + websiteId + '/page');

  }

  findPageById(pageId) {
    console.log('front page service findpageById() called');
    // Only need to call server's url to get the data.
    return this.http.get<Page>(this.baseUrl + this.pageApiUrl + pageId);


  }

  updatePage(pageId, page) {
    console.log('front page service updatePage() called');
    return this.http.put<Page>(this.baseUrl + this.pageApiUrl + pageId, page);
  }

  deletePage(pageId) {
    console.log('front page service deletePage() called');
    return this.http.delete<Page>(this.baseUrl + this.pageApiUrl + pageId);
  }
}

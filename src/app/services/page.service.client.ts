import 'rxjs/Rx';
import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class PageService {

  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  createPage( websiteId: string, page: Page): Observable<any> {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post<any>(url, page);
  }

  findPagesByWebsiteId(websiteId): Observable<any[]> {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get<any[]>(url);
  }

  findPageById(pageId): Observable<any> {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get<any>(url);
  }

  updatePage(pageId, page): Observable<any> {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.put<any>(url, page);
  }

  deletePage(pageId): Observable<any> {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete<any>(url);
  }
}

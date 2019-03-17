import {Injectable} from '@angular/core';
import { Page } from '../models/page.model.client';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PageService {
  constructor(private _http: HttpClient) { }

  baseUrl = environment.baseUrl;

  static getNewPage() {
    return new Page(undefined, undefined, undefined, undefined);
  }

  createPage(websiteId: String, page: Page) {
    return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
      // .pipe(map(
      // (res: any) => res.json()));
  }

  findPageByWebsiteId(websiteId: String) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  // findPageByWebsiteId2(websiteId: String) {
  //   return this.pages.filter(function (page) {
  //     return page.websiteId === websiteId;
  //   });
  // }

  findPageById(pageId: String) {
    return this._http.get(this.baseUrl + '/api/page/' + pageId);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  updatePage(pageId: String, page: Page) {
    return this._http.put(this.baseUrl + '/api/page/' + pageId, page);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  deletePage(pageId: String) {
    return this._http.delete(this.baseUrl + '/api/page/' + pageId);
      // .pipe(map(
      //   (res: any) => res.json()));
  }
}

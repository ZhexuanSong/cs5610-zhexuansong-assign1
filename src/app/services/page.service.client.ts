import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class PageService {

  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;

  pages: Page[] = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'}
  ];

  api = {};

  createPage(websiteId: string, page: Page) {
    return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
  }

  findAllPagesForWebsite(websiteId) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
  }

  findPageById(pageId) {
    return this._http.get(this.baseUrl + '/api/page/' + pageId);
  }

  updatePage(pageId, page: Page) {
    return this._http.put(this.baseUrl + '/api/page/' + pageId, page);
  }

  deletePage(pageId) {
    return this._http.delete(this.baseUrl + '/api/page/' + pageId);
  }
}

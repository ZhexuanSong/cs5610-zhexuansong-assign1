import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {HttpClient} from '@angular/common/http';
import 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class PageService {
    constructor(private _http: HttpClient) {}

    baseUrl = environment.baseUrl;

    pages = [
        new Page('001', 'Post 1', '001', 'Lorem'),
        new Page('12', 'Post 2', '123', 'Lorem'),
        new Page('123', 'Post 3', '001', 'Lorem')
    ];

    api = {
        'createWebsite' : this.createPage,
        'findPageByWebsiteId' : this.findPageByWebsiteId,
        'findPageById' : this.findPageById,
        'updatePage': this.updatePage,
        'deletePage': this.deletePage
    };

    createPage(websiteId: string, page: Page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
    }

    findPageByWebsiteId(websiteId: string) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
    }

    findPageById(pageId: string) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId);
    }

    updatePage(pageId: string, page: Page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page);
    }

    deletePage(pageId: string) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId);
    }
    // createPage(websiteId: string, page: Page): Observable<Page[]> {
    //     return this._http.post<Page[]>(this.baseUrl + '/api/website/' + websiteId + '/page', JSON.stringify(page)).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // findPageByWebsiteId(websiteId: string): Observable<Page[]> {
    //     return this._http.get<Page[]>(this.baseUrl + '/api/website/' + websiteId + '/page').pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // findPageById(pageId: string): Observable<Page> {
    //     return this._http.get<Page>(this.baseUrl + '/api/page/' + pageId).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // updatePage(pageId: string, page: Page): Observable<Page[]> {
    //     return this._http.put<Page[]>(this.baseUrl + '/api/page/' + pageId, JSON.stringify(page)).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // deletePage(pageId: string) {
    //     return this._http.delete<Page>(this.baseUrl + '/api/page/' + pageId).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
}

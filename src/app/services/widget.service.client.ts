import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class WidgetService {
  constructor(private http: HttpClient) {}
  baseurl = environment.baseUrl;

  createWidget(pageId, widget): Observable<any> {
    const url = this.baseurl + '/api/page/' + pageId + '/widget';
    return this.http.post<Widget>(url, widget);
  }

  findWidgetsByPageId(pageId): Observable<any[]> {
    const url = this.baseurl + '/api/page/' + pageId + '/widget';
    return this.http.get<any[]>(url);
  }

  findWidgetById(widgetId): Observable<any> {
    const url = this.baseurl + '/api/widget/' + widgetId;
    return this.http.get<any>(url);

  }

  updateWidget(widgetId, widget): Observable<any> {
    const url = this.baseurl + '/api/widget/' + widgetId;
    return this.http.put<any>(url, widget);
  }

  deleteWidget(widgetId): Observable<any> {
    const url = this.baseurl + '/api/widget/' + widgetId;
    return this.http.delete<any>(url);
  }

  reorderWidgets(startIndex, endIndex, pageId) {

    const url = this.baseurl + '/api/page/' + pageId + '/widget/reorder?start=' + startIndex + '&end=' + endIndex;
    return this.http.get(url);
  }

  uploadImage(file: any) {
    return this.http.post(this.baseurl + '/api/uploads', file);
  }

}

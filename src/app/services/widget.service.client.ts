import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class WidgetService {
  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createWidget(pageId, widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetsByPageId(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetById(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWidget(widgetId, widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }

  reorderWidgets(startIndex, endIndex, pageId) {

    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this.http.put(url, '')
      .map(
        (res: Response) => {
          const data = res;
          return data;
        });
  }


}

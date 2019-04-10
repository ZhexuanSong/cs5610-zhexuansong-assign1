import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {

  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;

  static getNewWidget() {
    return new Widget(undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined);
  }

  createWidget(pageId: String, widget: Widget) {
    return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  findWidgetsByPageId(pageId: String) {
    return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  findWidgetById(widgetId: String) {
    return this._http.get(this.baseUrl + '/api/widget/' + widgetId);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  updateWidget(widgetId: String, widget: Widget) {
    return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  deleteWidget(widgetId: String) {
    return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
      // .pipe(map(
      //   (res: any) => res.json()));
  }

  reorderWidgets(pageId: String, startIndex: String, endIndex: String, widgets: Widget[]) {
    return this._http.put(this.baseUrl + '/api/page/' + pageId
      + '/widget?initial=' + startIndex + '&final=' + endIndex, widgets);
      // .pipe(map(
      //   (res: any) => res.json()));
  }
}

import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {
  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;


  private widgetChosen = new BehaviorSubject('DEFAULT');
  currentWidgetType = this.widgetChosen.asObservable();
  // widgets: Widget[] = [
  //   new WidgetHeading('123', 'HEADING', 'heading1', '321', 2, 'GIZMODO'),
  //   new WidgetHeading('234', 'HEADING',  'heading2', '321', 4, 'Lorem ipsum'),
  //   new WidgetImage('345', 'IMAGE', 'Photo', '321', '100%', 'http://lorempixel.com/400/200'),
  //   new WidgetHtml('456', 'HTML', 'html1', '321', '<p>Lorem ipsum</p>'),
  //   new WidgetHeading('567', 'HEADING', 'heading3', '321', 4, 'Lorem ipsum'),
  //   new WidgetYoutube('678', 'YOUTUBE', 'frozen', '321', 'frozen', '100%', 'https://www.youtube.com//embed/eSLe4HuKuK0'),
  //   new WidgetHtml('789', 'HTML', 'html1', '321', '<p>Lorem ipsum</p>')
  // ];

  createWidget(pageId, widget) {
    return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
  }

  findAllWidgetsForPage(pageId) {
    return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
  }

  findWidgetById(widgetId) {
    return this._http.get(this.baseUrl + '/api/widget/' + widgetId);
  }

  updateWidget(widgetId, widget: any) {
    return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
  }

  deleteWidget(widgetId) {
    return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
  }

  chooseNewType(widgetType: string) {
    this.widgetChosen.next(widgetType);
  }

  reorderWidgets(pageId: String, startIndex: Number, endIndex: Number, widgets: Widget[]) {
    return this._http.put(this.baseUrl + '/api/page/' + pageId
      + '/widget?initial=' + startIndex + '&final=' + endIndex, widgets);
  }

  findImage(imageName: String) {
    const url = this.baseUrl + '/api/image/' + imageName;
    return this._http.get(url);
  }
}

import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class WidgetService {
    constructor(private _http: HttpClient) {}

    baseUrl = environment.baseUrl;


    widgets = [
        new Widget('001', 'HEADING', '001', '30', 'Oldham to learn Scholes decision on Thursday', '100%',
            '', '', true, 1, ''),
        new Widget('234', 'IMAGE', '001',
            '2','GIZMODO', '100%', 'https://thesefootballtimes.co/wp-content/uploads/2016/02/scholes.jpg', '',
            true, 1, ''),
        new Widget('123', 'YOUTUBE', '001',
            '1', '', '80%', 'https://www.youtube.com/embed/APexI9Zb6iE', '',
            true, 1, '')
    ];

    api = {
        'createWidget' : this.createWidget,
        'findWidgetsByPageId' : this.findWidgetsByPageId,
        'findWidgetById' : this.findWidgetById,
        'updateWidget': this.updateWidget,
        'deleteWidget': this.deleteWidget
    };

    createWidget(pageId: string, widget: Widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
    }

    findWidgetsByPageId(pageId: string) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
    }

    findWidgetById(widgetId: string) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId);
    }

    updateWidget(widgetId: string, widget: Widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
    }

    deleteWidget(widgetId: string) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
    }

    reorderWidget(pageId: string, index1: string, index2: string) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget/reorder?' + 'index1=' + index1 + '&' + 'index2=' + index2);
    }

    uploadImage(info: any) {
        return this._http.post(this.baseUrl + '/api/uploads', info);
    }

    // createWidget(pageId: string, widget: Widget): Observable<Widget[]> {
    //     return this._http.post<Widget[]>(this.baseUrl + '/api/page/' + pageId + '/widget', JSON.stringify(widget)).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // findWidgetsByPageId(pageId: string): Observable<Widget[]> {
    //     return this._http.get<Widget[]>(this.baseUrl + '/api/page/' + pageId + '/widget').pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // findWidgetById(widgetId: string): Observable<Widget> {
    //     return this._http.get<Widget>(this.baseUrl + '/api/widget/' + widgetId).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // updateWidget(widgetId: string, widget: Widget): Observable<Widget[]>  {
    //     return this._http.put<Widget[]>(this.baseUrl + '/api/widget/' + widgetId, JSON.stringify(widget)).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // deleteWidget(widgetId: string): Observable<Widget>  {
    //     return this._http.delete<Widget>(this.baseUrl + '/api/widget/' + widgetId).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    //
    // }
}

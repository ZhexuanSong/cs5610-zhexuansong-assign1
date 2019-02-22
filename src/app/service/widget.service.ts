import { Injectable } from '@angular/core';
import {Widget} from '../model/widget.model';



@Injectable()
export class WidgetService {

  widgets =   [
    new Widget('123', 'HEADING', '321', '2', 'GIZMODO', '100%', 'url'),
    new Widget('234', 'HEADING', '321', '4', 'Lorem ipsum', '100%', 'url'),
    new Widget('345', 'IMAGE', '321', '4', 'text', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('456', 'HTML', '321', '4', '<p>Lorem ipsum</p>', '100%', 'url'),
    new Widget('567', 'HEADING', '321', '4', 'Lorem ipsum', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('678', 'YOUTUBE', '321', '4', 'text', '100%', 'https://www.youtube.com/embed/4jtVx4_QpKA'),
    new Widget('789', 'HTML', '321', '4', '<p>Lorem ipsum</p>', '100%', 'url'),
  ];

  constructor() { }

  createWidget(widgetType: string, pageId: string, size: string, text: string, width: string, url: string) {
    // actually this should done in the server side
    const id = Math.random().toString();
    this.widgets.push(new Widget(id, widgetType, pageId, size, text, width, url));
  }

  findWidgetByPageId(pageId: string) {
     const pageWidget = [];
    this.widgets.forEach(function (widget) {
      if (widget.pageId === pageId) {
        pageWidget.push(widget);
      }
    });
    return pageWidget;
  }

  findWidgetById(widgetId: string) {
    const widgetFound = this.widgets.find(widget =>  widget.id === widgetId);
    return new Widget(widgetFound.id, widgetFound.widgetType, widgetFound.pageId, widgetFound.size,
      widgetFound.text, widgetFound.width, widgetFound.url);
  }

  updateWidget(widgetId: string, newWidget: Widget) {
    const index = this.widgets.findIndex(widget => widget.id === widgetId);
    this.widgets[index] = newWidget;
  }
  deleteWidget(widgetId: string) {
    const index = this.widgets.findIndex(widget => widget.id === widgetId);
    this.widgets.splice(index, 1);
  }
}

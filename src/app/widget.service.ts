import { Injectable } from '@angular/core';
import {Widget} from './model/Widget';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  widgets = [

    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},

    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},

    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",

      "url": "http://lorempixel.com/400/200/"},

    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},

    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},

    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",

      "url": "https://youtu.be/AM2Ivdi9c4E" },

    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}

  ];
  constructor() { }
  createWidget(pageId, widget){
    var lastId = this.widgets[this.widgets.length-1]._id;
    widget._id = (+(lastId)+1).toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget._id;
  }
  findWidgetsByPageId(pageId) {
    let res = [];
    for (var widget of this.widgets) {
      if (widget.pageId === pageId) {
        res.push(widget);
      }
    }
    return res;

  }
  findWidgetById(widgetId) {
    for (var w of this.widgets) {
      if (w._id === widgetId) {
        let size = (w.size === undefined) ? 1 : w.size;
        let text = (w.text === undefined) ? "text" : w.text;
        let width = (w.width === undefined) ? "100%" : w.width;
        let url = (w.url === undefined) ? "" : w.url;
        return new Widget(w._id, w.widgetType, w.pageId, size, text, width, url);
      }
    }
    return null;

  }
  updateWidget(widgetId, widget){
    for (var i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        this.widgets[i] = widget;
        return;
      }
    }

  }
  deleteWidget(widgetId){
    for (var i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        this.widgets.splice(i, 1);
        return;
      }
    }
    
  }
}

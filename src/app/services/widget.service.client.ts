import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Widget } from '../models/widget.model.client';

// import { Widget } from '../models/widget.model.client';

@Injectable()
export class WidgetService {

    constructor() { }

    widgets: Widget[] = [
        { _id: "123", widgetType: "HEADER", pageId: "321", size: "2", text: "GIZMODO", url: "", width: "" },
        { _id: "234", widgetType: "HEADER", pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "" },
        { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
        { _id: "456", widgetType: "HTML", pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "" },
        { _id: "567", widgetType: "HEADER", pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "" },
        { _id: "678", widgetType: "YOUTUBE", pageId: "321", size: "", text: "", url: "https://youtu.be/AM2Ivdi9c4E", width: "100%" },
        { _id: "789", widgetType: "HTML", pageId: "321", size: "<p>Lorem ipsum</p>", text: "", url: "", width: "" }
    ];

    api = {
        'createWidget': this.createWidget,
        'findWidgetsByPageId': this.findWidgetsByPageId,
        'findWidgetById': this.findWidgetById,
        'updateWidget': this.updateWidget,
        'deleteWidget': this.deleteWidget
    };

    createWidget(pageId: String, widget: any) {
        widget._id = Math.random().toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
    }

    findWidgetsByPageId(pageId: String) {
        const resultSet: Widget[] = [];
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId == pageId) {
                resultSet.push(this.widgets[x]);
            }
        }
        return resultSet;
    }

    findWidgetById(widgetId: String) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId) {
                return this.widgets[x];
            }
        }
    }

    updateWidget(widgetId: String, widget: any) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId && this.widgets[x].widgetType == widget.widgetType) {
                switch (widget.widgetType) {
                    case 'HEADER':
                        this.widgets[x].text = widget.text;
                        this.widgets[x].size = widget.size;
                        return true;

                    case 'IMAGE':
                        this.widgets[x].text = widget.text;
                        this.widgets[x].url = widget.url;
                        this.widgets[x].width = widget.width;
                        return true;

                    case 'YOUTUBE':
                        this.widgets[x].text = widget.text;
                        this.widgets[x].url = widget.url;
                        this.widgets[x].width = widget.width;
                        return true;
                }
            }
        }
    }

    deleteWidget(widgetId: String) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    }
}

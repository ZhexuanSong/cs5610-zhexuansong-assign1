import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

    flag = false; // setting error flag as false by default
    userId: string;
    websiteId: string;
    pageId: string;
    widgetId: string;
    widget: any;
    widgets: any;
    baseUrl = environment.baseUrl;

    constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.userId = params['uid'];
                this.websiteId = params['wid'];
                this.pageId = params['pid'];
                this.widgetId = params['wgid'];
            }
        );
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(
                (data: any) => this.widget = data,
                (error: any) => console.log(error)
            );
    }

    updateWidget() {

        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            this.flag = true;
        } else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
                (widget: any) => {
                    console.log('update widget header: ');
                });
        }
    }

    deleteWidget() {

        this.widgetService.deleteWidget(this.widgetId).subscribe((data: any) => {
            console.log('widget deleted: ' + data._id);
        });

    }
}

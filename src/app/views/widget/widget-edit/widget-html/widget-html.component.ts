import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
    @ViewChild('f') myWidgetForm: NgForm;
    flag = false; // setting error flag as false by default
    error: string;
    alert: string;
    websiteId: string;
    pageId: string;
    widgetId: string;
    widget: any;
    widgets: any;

    constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';

        this.activatedRoute.params
            .subscribe(
                (params: any) => {
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
        this.widget.name = this.myWidgetForm.value.widgetname;
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
            console.log('widget deleted' + data._id);
        });

    }

}

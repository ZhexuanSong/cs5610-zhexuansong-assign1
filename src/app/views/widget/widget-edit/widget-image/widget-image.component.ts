import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {environment} from '../../../../../environments/environment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
    @ViewChild('f') myWidgetForm: NgForm;
    flag = false; // setting error flag as false by default
    websiteId: string;
    pageId: string;
    widgetId: string;
    userId: string;
    widget: any;
    widgets: any;
    baseUrl = environment.baseUrl;

    constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
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
        console.log('start update widget image: ');
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            console.log('fail update widget image: ');
            this.flag = true;
        } else {
            console.log('trying update widget image: ');
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
                (widget: any) => {
                    console.log('update widget image: ');
                });
        }
    }

    deleteWidget() {

        this.widgetService.deleteWidget(this.widgetId).subscribe((data: any) => {
            console.log('widget deleted: ' + data._id);
        });

    }
}

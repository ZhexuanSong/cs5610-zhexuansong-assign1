import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-widget-youtube',
    templateUrl: './widget-youtube.component.html',
    styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
    @ViewChild('f') myWidgetForm: NgForm;
    flag = false; // setting error flag as false by default
    websiteId: string;
    pageId: string;
    widgetId: string;
    widget: any;

    constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

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
                (data: any) => {
                    this.widget = data;
                    console.log('youtube: ' + this.widget);
                },
                (error: any) => console.log(error)
            );
    }

    updateWidget() {

        this.widget.name = this.myWidgetForm.value.widgetname;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        console.log('update youtube: ' + this.widget.url);
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            const match = this.widget.url.match(regExp);
            this.widget.url = 'https://www.youtube.com/embed/' + match[2];
        console.log('safe youtube url: ' + this.widget.url);
        if (this.widget['name'] === undefined) {
            this.flag = true;
        } else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
                (widget: any) => {
                    console.log('update widget header: ');
                });
        }
    }

  //  https://www.youtube.com/embed/mFkli0wD4-w
 //        https://www.youtube.com/embed/vw2SaHkGfss

    deleteWidget() {

        this.widgetService.deleteWidget(this.widgetId).subscribe((data: any) => {
        });

    }

}

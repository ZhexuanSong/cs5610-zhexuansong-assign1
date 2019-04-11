import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
    widget: any = {};
    userId: String;
    websiteId: String;
    pageId: String;
    widgetId: String;
  errorFlag: boolean;
  errorMsg = "Widget name can't be empty!";

    constructor(
        private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.widgetId = params['wgid'];
                this.pageId = params['pid'];
                this.userId = params['uid'];
                this.websiteId = params['wid'];
            }
        );
      if (this.widgetId === 'undefined') {
        this.widget = {
          _id: '', widgetType: 'HTML', name: '', pageId: this.pageId, size: '1', text: '', url: '', width: '100%'};
      } else {
        this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget: Widget) => {
            this.widget = widget;
            console.log(this.widget);
          });
      }
    }

    updateWidget() {
      if (!this.widget.name) {
        this.errorFlag = true;
        return;
      }
      console.log(this.widget);
      if (this.widgetId === 'undefined') {
        this.widget = new Widget('', 'HTML', this.widget.name, this.pageId, this.widget.size, this.widget.text, '100%', '');
        this.widgetService.createWidget(this.pageId, this.widget).subscribe(
          (new_wgt: Widget) => {
            this.widget = new_wgt;
            console.log('create widget-html success!');
            this.router.navigate(['../'], {relativeTo: this.activatedRoute});
          }
        );
      } else {
        this.widget = new Widget(this.widgetId, 'HTML', this.widget.name, this.pageId, this.widget.size, this.widget.text);
        console.log(this.widget);
        this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
          (new_wgt: Widget) => {
            console.log('update widget-html success!');
            this.router.navigate(['../'], {relativeTo: this.activatedRoute});
          }
        );
      }
    }

    deleteWidget() {
        // this.widgetService.deleteWidget(this.widgetId);
        // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
        this.widgetService.deleteWidget(this.widgetId).subscribe(
            (widget: any) => {
                const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
                this.router.navigate([url]);
            }
        );
    }
}

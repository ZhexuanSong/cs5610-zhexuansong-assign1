import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
    widget: any = {};
    userId: String;
    websiteId: String;
    pageId: String;
    widgetId: String;
  errorFlag: boolean;
  errorMsg = "Widget name can't  be empty!";

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
      this.widget.widgetType = 'TEXT';
      if (this.widgetId !== 'undefined') {
        // @ts-ignore
        this.widget = this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget: Widget) => {
            this.widget = widget;
            console.log('loading widget-text success!');
          }
        );
      }
    }

    updateWidget() {
      if (! this.widget.name) {
        this.errorFlag = true;
        return;
      }
        if (this.widgetId === 'undefined') {
          this.widgetService.createWidget(this.pageId, this.widget).subscribe(
            (new_wgt: Widget) => {
              this.widget = new_wgt;
              console.log('create widget-text success!');
              this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            }
          );
        } else {
          this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
            (new_wgt: Widget) => {
              console.log('update widget-text success!');
              this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            }
          );
        }

    }

    deleteWidget() {
        this.widgetService.deleteWidget(this.widgetId).subscribe(
            (widget: any) => {
                const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
                this.router.navigate([url]);
            }
        );
    }
}


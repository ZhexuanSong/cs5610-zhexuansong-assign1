import {Component, OnInit} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ignore} from 'selenium-webdriver/testing';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})

export class WidgetEditComponent implements OnInit {
  widget: Widget;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widgetChosen: String;

  constructor(private  widgetService: WidgetService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      console.log('widget-edit, user_id = ' + this.userId
        + ', website id = ' + this.websiteId + ', page id = ' + this.pageId + '.widget id = ' + this.widgetId);
    });
    this.widgetService.currentWidgetType
      .subscribe(
        (widgetChosen: String) => {
          this.widgetChosen = widgetChosen;
        }
      );
    console.log(this.widgetId);
    if (this.widgetId !== 'undefined') {
      this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        }
      );
    }
  }

}

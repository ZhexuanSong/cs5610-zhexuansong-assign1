import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WidgetChooserComponent implements OnInit {
  widgets = [];
  widgetId: String;
  pageId: String;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params => {
          return this.widgetService.findWidgetsByPageId(params['pid']).subscribe((returnWidgets: Widget[]) => {
            this.pageId = params['pid'];
            this.widgets = returnWidgets;
          });
        }
      );
  }
}

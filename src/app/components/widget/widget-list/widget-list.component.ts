import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets: Widget[] = [];
  pageId: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageId = params['pid'];
      console.log('loading widgets for pageId: ' + this.pageId);
      return this.widgetService.findWidgetsByPageId(this.pageId).subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  getUrl(url: String) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  reorderItems(indexes: any) {
    this.widgetService.reorderWidgets(this.pageId, indexes.startIndex, indexes.endIndex, this.widgets)
      .subscribe(
        (data: any) => {
          console.log('start: ' + indexes.startIndex);
          console.log('stop: ' + indexes.endIndex);
          window.location.reload();
        }
      );
  }
}

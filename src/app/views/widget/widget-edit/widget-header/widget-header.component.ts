import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  websiteId: string;
  pageId: string;
  widgetId: string;
  isNewWidget: boolean;
  widget: Widget;
  errorFlag: boolean;
  errorMsg = 'Please enter the name.';

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.widget = new Widget( 'HEADER', undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.widgetId = params.widgetId;
      if (this.widgetId) {
        this.widgetService.findWidgetById(this.widgetId).subscribe((data: Widget) => {
          this.widget = data;
          this.isNewWidget = false;
        });
      } else {
        this.isNewWidget = true;
      }
    });
  }

  widgetOperation() {
    if (this.isNewWidget) {
      this.createNewWidget();
    } else {
      this.updateCurWidget();
    }
  }

  private createNewWidget() {
    if (this.widget.name === undefined || this.widget.name === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe((data) => {
        this.widget = data;
        this.backToWidgets();
      });
    }
  }

  private updateCurWidget() {
    if (this.widget.name === '' || this.widget.name === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.widgetService.updateWidget(this.widgetId, this.widget).subscribe((data: Widget) => {
        this.widget = data;
        this.backToWidgets();
      });
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(() => {
      this.backToWidgets();
    });
  }

  backToWidgets() {
    this.router.navigate(['/profile/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
  }


}

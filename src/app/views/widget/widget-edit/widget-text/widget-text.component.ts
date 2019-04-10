import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: Widget;
  isNewWidget: boolean;
  errorFlag; boolean;
  errorMsg = 'Please enter your text information.';

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.widget = new Widget( 'TEXT', '', '', undefined, '', undefined,
      undefined, undefined, false, '');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.widgetId = params.widgetId;
      if (this.widgetId) {
        this.widgetService.findWidgetById(this.widgetId).subscribe((data) => {
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
    if (!this.widget.text || !this.widget.rows || this.widget.text === '' || this.widget.rows === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe((data: Widget) => {
        this.widget = data;
        this.backToWidgets();
      });
    }
  }

  private updateCurWidget() {
    if (!this.widget.text || !this.widget.rows || this.widget.text === '' || this.widget.rows === '') {
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

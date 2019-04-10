import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  wgid: String;
  widget: Widget;
  widgetType: String;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      return this.widgetService.findWidgetById(params['wgid']).subscribe((returnWidget: Widget) => {
        this.wgid = params['wgid'];
        this.widget = returnWidget;
        this.widgetType = this.widget.widgetType;
      });
    });
  }


}

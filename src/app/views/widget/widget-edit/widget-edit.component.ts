import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  widgetId: String;
  widget: any;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
          (params: any) => {
              this.widgetId = params['wgid'];
              this.widgetService.findWidgetById(this.widgetId)
                  .subscribe(
                      (widget: any) => {
                          this.widget = widget;
                      },
                      (error: any) => console.log(error)
                  );
          }
      );
  }

}

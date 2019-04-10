import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  websiteId: String;
  pageId: String;
  widget = {};

  defaultWidgetValues =
      {
        'HEADER': {name: '', widgetType: 'HEADER', 'size' : 1},
        'IMAGE': {name: '', widgetType: 'IMAGE', width: '100%'},
        'YOUTUBE': {name: '', widgetType: 'YOUTUBE', width: '100%'},
        'HTML': {name: '', widgetType: 'HTML'},
        'TEXT': {name: '', widgetType: 'TEXT', placeholder: ''}
      };

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  createWidget(widgetType) {
    this.widget = this.defaultWidgetValues[widgetType];
    console.log('new widget: ' + this.widget);
    this.widgetService.createWidget(this.pageId, this.widget).subscribe((data: any) => {
      this.widget = data;
      console.log(data);
      this.router.navigate(['/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + data._id]);
    });
    console.log(this.widget);
  }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.websiteId = params['wid'];
              this.pageId = params['pid'];
            }
        );
  }

}

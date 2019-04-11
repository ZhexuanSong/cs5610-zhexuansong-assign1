import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: string;
  widgetId: string;
  widgetType: string;

  constructor(private  widgetService: WidgetService,
              private route: ActivatedRoute,
              private  router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.widgetId = params['wgid'];
    });
    this.widgetService.currentWidgetType
      .subscribe(
        (widgetType: string) => {
          this.widgetType = widgetType;
        }
      );
  }

  createWidget(widgetType: string) {
    this.widgetService.chooseNewType(widgetType);
    // this.router.navigate(['../', this.widgetId], {relativeTo: this.route});
  }


}

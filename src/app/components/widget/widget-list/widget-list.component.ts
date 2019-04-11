import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgets: Widget[];
  startIndex: Number;
  endIndex: Number;


  constructor(private  widgetService: WidgetService,
              private router: Router,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
    this.startIndex = 0;
    this.endIndex = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
    this.widgetService.findAllWidgetsForPage(this.pageId).subscribe(
      (widgets: any) => { this.widgets = widgets; console.log(this.widgets); }
    );
    console.log('widget-list, user_id = ' + this.userId + ', website id = ' + this.websiteId
      + ', page id = ' + this.pageId);
  }

  getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onNewIndexes(newIndexes) {
    this.startIndex = newIndexes.startIndex;
    this.endIndex = newIndexes.endIndex;
    this.widgetService.reorderWidgets(this.pageId, this.startIndex, this.endIndex, this.widgets)
      .subscribe();
  }

  refresh() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

  }

}

import { Component, OnInit } from '@angular/core';
import {WidgetService} from 'src/app/widget.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Widget} from 'src/app/model/Widget';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        // console.log(params);
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      });

  }

  goBack() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
  goToWidgetEdit(widgetId) {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widgetId]);

  }
  goToHeader(){
    let widget = new Widget("", "HEADER", this.pageId, 0, "", "", "");
    let widgetId = this.widgetService.createWidget(this.pageId, widget);
    this.goToWidgetEdit(widgetId);

  }
  goToImage() {
    let widget = new Widget("", "IMAGE", this.pageId, 0, "", "", "");
    let widgetId = this.widgetService.createWidget(this.pageId, widget);
    this.goToWidgetEdit(widgetId);

  }
  goToYoutube() {
    let widget = new Widget("", "YOUTUBE", this.pageId, 0, "", "", "");
    let widgetId = this.widgetService.createWidget(this.pageId, widget);
    this.goToWidgetEdit(widgetId);

  }

}

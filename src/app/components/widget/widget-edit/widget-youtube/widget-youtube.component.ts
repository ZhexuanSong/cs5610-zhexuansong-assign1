import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') youtubeForm: NgForm;
  widgetId: String;
  pageId: String;
  websiteId: String;
  userId: String;
  widget: Widget;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Please enter URL!';
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('widget._id: ' + params['wgid']);
      this.widgetId = params['wgid'];
      this.pageId = params['pid'];
      this.websiteId = params['wid'];
      this.userId = params['uid'];
    });
    if (this.widgetId === undefined) {
      this.widget = WidgetService.getNewWidget();
    } else {
      this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        }
      );
    }
  }

  deleteYoutube() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (data: Widget) => {
          console.log('delete widget youtube');
        },
        (error: any) => console.log(error)
      );
    }
    this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
  updateYoutube() {
    if (this.widget.url === undefined) {
      this.errorFlag = true;
      return;
    }
    if (this.widgetId === undefined) {
      this.widget.type = 'YOUTUBE';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          console.log('create widget youtube: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', url: ' + widget.url + ', width: ' + widget.width);
        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget youtube: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', url: ' + widget.url + ', width: ' + widget.width);
        },
        (error: any) => console.log(error)
      );
    }
    this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}

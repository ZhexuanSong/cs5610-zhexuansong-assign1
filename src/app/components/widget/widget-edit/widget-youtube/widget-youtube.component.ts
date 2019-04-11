import {Component, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  widget: any = {}; // = new Widget('', '', '', '', '', '', '', '');
  userId: String;
  pageId: String;
  widgetId: String;
  newWidget: Widget;
  errorFlag: boolean;
  errorMsg = "Widget name can't  be empty!";

  constructor(private  widgetService: WidgetService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
    });
    if (this.widgetId !== 'undefined') {
      // @ts-ignore
      this.widget = this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          console.log('loading widget-youtube success!');
        }
      );
    }
  }

  updateWidget() {
    if (!this.widget.name) {
      this.errorFlag = true;
      return;
    }
      if (this.widgetId === 'undefined') {
        this.newWidget = new Widget('', 'YOUTUBE', this.widget.name, this.pageId, this.widget.size, this.widget.text, this.widget.width,
          this.widget.url);
        this.widgetService.createWidget(this.pageId, this.newWidget).subscribe(
          (new_wgt: Widget) => {
            this.widget = new_wgt;
            console.log('create widget-youtube success!');
            this.router.navigate(['../'], {relativeTo: this.route});
          }
        );
      } else {
        this.newWidget = new Widget(this.widgetId, 'YOUTUBE', this.widget.name, this.pageId, this.widget.size, this.widget.text,
          this.widget.width, this.widget.url);
        this.widgetService.updateWidget(this.widget._id, this.newWidget).subscribe(
          (new_wgt: Widget) => {
            console.log('update widget-youtube success!');
            this.router.navigate(['../'], {relativeTo: this.route});
          }
        );
      }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widget._id).subscribe(
      (d_widget: any) => {
        console.log('delete widget-heading success!');
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

}

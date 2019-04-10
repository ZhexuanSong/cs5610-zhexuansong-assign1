import {Component, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  widgetId: String;
  pageId: String;
  websiteId: String;
  userId: String;
  widget: Widget;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Please enter name!';
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
  delete() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (data: Widget) => {
          console.log('delete widget text');
        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
  update() {
    if (this.widget.name === undefined) {
      this.errorFlag = true;
      return;
    }
    if (this.widgetId === undefined) {
      this.widget.type = 'TEXT';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          console.log('create widget text: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', rows: ' + widget.rows + ', placeholder: '
            + widget.placeholder + ', formatted: ' + widget.formatted);
        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget text: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', rows: ' + widget.rows + ', placeholder: '
            + widget.placeholder + ', formatted: ' + widget.formatted);
        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

}

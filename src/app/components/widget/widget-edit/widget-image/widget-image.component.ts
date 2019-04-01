import { Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})

export class WidgetImageComponent implements OnInit {
  @ViewChild('f') imageForm: NgForm;
  widgetId: String;
  pageId: String;
  websiteId: String;
  userId: String;
  widget: Widget;
  errorFlag: Boolean;
  errorMsg: String;
  baseUrl = environment.baseUrl;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private route: Router) { }

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

  deleteImage() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (data: Widget) => {
          console.log('delete widget image');
        },
        (error: any) => console.log(error)
      );
    }
    this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  updateImage() {
    // if (this.widget.url === undefined) {
    //   this.errorFlag = true;
    //   return;
    // }
    if (this.widgetId === undefined) {
      this.widget.type = 'IMAGE';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          console.log('create widget image: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', url: ' + widget.url + ', width: ' + widget.width);        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget image: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', url: ' + widget.url + ', width: ' + widget.width);        },
        (error: any) => console.log(error)
      );
    }
    this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  chooseFromFlickr() {
    this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId, 'flickr']);

  }
}

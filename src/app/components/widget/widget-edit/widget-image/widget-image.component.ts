import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Widget} from 'src/app/model/Widget';
import {NgForm} from '@angular/forms';
import {WidgetService} from 'src/app/widget.service';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;
  @Input() userId: String;
  @Input() websiteId: String;
  @Input() pageId: String;
  @Input() widgetId: String;
  @Input() widget: Widget;
  baseUrl = environment.baseUrl;
  constructor(private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

  }
  goToFlickrSearch() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId, 'flickr']);
  }
  updateWidget() {
    const text = this.widgetForm.value.newText;
    const url = this.widgetForm.value.newUrl;
    const width = this.widgetForm.value.newWidth;
    this.widget.text = text;
    this.widget.url = url;
    this.widget.width = width;
    this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
      () => this.goBack()
    );

  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widget._id).subscribe(
      () => this.goBack()
    );
  }
  displayWidgetText() {
    return this.widget.text;
  }
  displayWidgetWidth() {
    return this.widget.width;
  }
  displayWidgetUrl() {
    return this.widget.url;
  }
}

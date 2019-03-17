import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from 'src/app/model/Widget';
import {WidgetService} from 'src/app/widget.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  @Input() userId: String;
  @Input() websiteId: String;
  @Input() pageId: String;
  @Input() widgetId: String;
  @Input() widget: Widget;
  constructor(private widgetService: WidgetService, private router: Router) { }


  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

  }
  updateWidget() {
    let text = this.widgetForm.value.newText;
    let url = this.widgetForm.value.newUrl;
    let width = this.widgetForm.value.newWidth;
    this.widget.text = text;
    this.widget.url = url;
    this.widget.width = width;
    this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
      () => this.goBack()
    );

  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widget._id).subscribe(
      () => this.goBack());
  }
  displayWidgetText() {
    return this.widget.text;
  }
  displayWidgetWidth(){
    return this.widget.width;
  }
  displayWidgetUrl() {
    return this.widget.url;
  }
}

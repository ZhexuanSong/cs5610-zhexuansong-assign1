import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})

export class WidgetImageComponent implements OnInit {
  @ViewChild('f') imageForm: NgForm;
  pageId: String;
  wgid: String;
  websiteId: String;
  userId: String;
  type: String;
  width: String;
  name: String;
  text: String;
  url: String;
  widget: any = {};
  baseUrl: String = environment.baseUrl;
  errorFlag: boolean;
  errorMsg = "Widget name can't be empty!";

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private route: Router) {}

  updateWidget() {
    if (!this.widget.name) {
      this.errorFlag = true;
      return;
    }
    if (this.widget.url === 'undefined') {
      this.errorFlag = true;
      return;
    }
    if (this.wgid === 'undefined') {
      // this.widget.type = 'IMAGE';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          console.log('create widget image !');
          this.route.navigate(['../'], {relativeTo: this.activatedRoute});
        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget image !');
          this.route.navigate(['../'], {relativeTo: this.activatedRoute});
        },
        (error: any) => console.log(error)
      );
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
    );
  }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.wgid = params['wgid'];
        if (this.wgid === 'undefined') {
          this.widget = {
            _id: '', widgetType: 'IMAGE', name: '', pageId: this.pageId, size: '1', text: '', url: '', width: '100%',
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
          };
        } else {
          this.widgetService.findWidgetById(this.wgid).subscribe(
            (widget: Widget) => {
              this.widget = widget;
              console.log(this.widget);
            });
        }
      });
  }

}

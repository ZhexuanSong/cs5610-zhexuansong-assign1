import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class WidgetImageComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;
  pageId: String;
  widgetId: String;
  widget: Widget;
  text: String;
  imgurl: String;
  width: String;
  userId: String;
  websiteId: String;
  name: String;
  errorFlag: boolean;
  errorMsg: String;
  baseUrl = environment.baseUrl;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Please enter a widget name';
    this.activatedRoute.params
      .subscribe(
        params => {
          this.websiteId = params['wid'];
          this.userId = params['uid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          if (this.widgetId !== undefined) {
            return this.widgetService.findWidgetById(params['wgid']).subscribe((returnWidget: Widget) => {
              this.widget = returnWidget;
              this.text = this.widget.text;
              this.imgurl = this.widget.url;
              this.width = this.widget.width;
              this.name = this.widget.name;
            });
          } else {
            this.widget = new Widget('', '', '', '', '', '', '', '');
            this.text = this.widget.text;
            this.imgurl = this.widget.url;
            this.width = this.widget.width;
            this.name = this.widget.name;

          }
        }
      );
  }


  updateOrCreate() {
    if (this.widgetId !== undefined) {
      this.widget.text = this.widgetForm.value.text;
      this.widget.width = this.widgetForm.value.width;
      this.widget.url = this.widgetForm.value.imgurl;
      this.widget.name = this.widgetForm.value.name;
      if (this.widget.name === undefined || this.widget.name.trim() === '') {
        this.errorFlag = true;
      } else {
        return this.widgetService.updateWidget(this.widgetId, this.widget).subscribe((returnWidget: Widget) => {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        });
      }
    } else {
      this.widget.text = this.widgetForm.value.text;
      this.widget.width = this.widgetForm.value.width;
      this.widget.url = this.widgetForm.value.imgurl;
      this.widget.name = this.widgetForm.value.name;
      this.widget.widgetType = 'Image';
      if (this.widget.name === undefined || this.widget.name.trim() === '') {
        this.errorFlag = true;
      } else {
        return this.widgetService.createWidget(this.pageId, this.widget).subscribe((returnWidget: Widget) => {
          this.widget = returnWidget;
          this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
        });
      }
    }
  }

  delete() {
    if (this.widgetId !== undefined) {
      return this.widgetService.deleteWidget(this.widgetId).subscribe((returnWidget: Widget) => {
      });
    } else {
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    }
  }

  toFlickr() {
    if (this.widgetId !== undefined) {
      this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId
      + '/widget/' + this.widgetId + '/flickr']);
    } else {
      this.widget.text = this.widgetForm.value.text;
      this.widget.width = this.widgetForm.value.width;
      this.widget.widgetType = 'Image';
      return this.widgetService.createWidget(this.pageId, this.widget).subscribe((returnWidget: Widget) => {
        this.widget = returnWidget;
        this.widgetId = this.widget._id;
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId
        + '/widget/' + this.widgetId + '/flickr']);
      });
    }
  }

}

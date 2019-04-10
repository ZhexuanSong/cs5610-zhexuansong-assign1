import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;
  pageId: String;
  wgid: String;
  widget: Widget;
  text: String;
  url: String;
  width: String;
  errorFlag: boolean;
  errorMsg: String;
  name: String;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Please enter a widget name.';
    this.activatedRoute.params
      .subscribe(
        params => {
          this.wgid = params['wgid'];
          this.pageId = params['pid'];
        }
      );
    if (this.wgid !== undefined) {
      return this.widgetService.findWidgetById(this.wgid).subscribe((returnWidget: Widget) => {
        this.widget = returnWidget;
        this.text = this.widget.text;
        this.url = this.widget.url;
        this.width = this.widget.width;
        this.name = this.widget.name;
      });
    } else {
      this.widget = new Widget('', '', '', '', '', '', '', '');
      this.name = this.widget.name;
      this.text = this.widget.text;
      this.url = this.widget.url;
      this.width = this.widget.width;
    }
  }


  updateOrCreate() {
    this.widget.name = this.widgetForm.value.name;
    this.widget.text = this.widgetForm.value.text;
    this.widget.width = this.widgetForm.value.width;
    this.widget.url = this.widgetForm.value.url;
    this.widget.widgetType = 'Youtube';
    if (this.wgid !== undefined) {
      if (this.widget.name === undefined || this.widget.name.trim() === '') {
        this.errorFlag = true;
      } else {
        return this.widgetService.updateWidget(this.wgid, this.widget).subscribe((returnWidget: Widget) => {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        });
      }
    } else {
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
    if (this.wgid !== undefined) {
      return this.widgetService.deleteWidget(this.wgid).subscribe((returnWidget: Widget) => {
      });
    } else {
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    }
  }

}

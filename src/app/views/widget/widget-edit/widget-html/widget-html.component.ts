import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;
  pageId: String;
  wgid: String;
  widget: Widget;
  text: String;
  name: String;
  errorFlag: boolean;
  errorMsg: String;


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
          if (this.wgid !== undefined) {
            return this.widgetService.findWidgetById(this.wgid).subscribe((returnWidget: Widget) => {
              this.widget = returnWidget;
              this.text = this.widget.text;
              this.name = this.widget.name;
            });
          } else {
            this.widget = new Widget('', '', 'Html', '', '', '', '', '', 0, '', false);
            this.text = this.widget.text;
            this.name = this.widget.name;
          }
        }
      );

  }


  updateOrCreate() {
    this.widget.text = this.widgetForm.value.text;
    this.widget.name = this.widgetForm.value.name;
    this.widget.widgetType = 'Html';
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

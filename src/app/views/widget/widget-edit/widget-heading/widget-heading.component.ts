import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-heading.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class WidgetHeadingComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  pageId: String;
  wgid: String;
  widget: Widget;
  text: String;
  size: String;
  name: String;
  errorMsg: String;
  errorFlag: boolean;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Please enter a widget name.';
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wgid = params['wgid'];
          this.pageId = params['pid'];
          if (this.wgid !== undefined) {
            return this.widgetService.findWidgetById(this.wgid).subscribe((returnWidget: Widget) => {
              this.widget = returnWidget;
              this.name = this.widget.name;
              this.text = this.widget.text;
              this.size = this.widget.size;
            });
          } else {
            this.widget = new Widget('', '', 'Heading', '', '', '', '', '', 0, '', false);
            this.text = this.widget.text;
            this.size = this.widget.size;
            this.name = this.widget.name;
          }
        }
      );

  }


  updateOrCreate() {
    this.widget.text = this.widgetForm.value.text;
    this.widget.size = this.widgetForm.value.size;
    this.widget.name = this.widgetForm.value.name;
    this.widget.widgetType = 'Heading';
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

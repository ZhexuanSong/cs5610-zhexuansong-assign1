import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  websiteId: string;
  pageId: string;
  widgetId: string;
  errorFlag: boolean;
  errorMsg = 'Please enter the name.';
  widget: Widget;
  isNewWidget: boolean;
  baseUrl: string;
  file: File;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.widget = new Widget( 'IMAGE', '', '', undefined, undefined, undefined,
      '', undefined, undefined, undefined);
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.widgetId = params.widgetId; if (this.widgetId) {
        this.widgetService.findWidgetById(this.widgetId).subscribe((data: Widget) => {
          this.widget = data;
          this.isNewWidget = false;
        });
      } else {
        this.isNewWidget = true;
      }
    });
    }

  widgetOperation() {
    if (this.isNewWidget) {
      this.createNewWidget();
    } else {
      this.updateCurWidget();
    }
  }

  private createNewWidget() {
    if (!this.widget.name || this.widget.name === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe((data: Widget) => {
        this.widget = data;
        this.backToWidgets();
      });
    }
  }

  private updateCurWidget() {
    if (!this.widget.name || this.widget.name === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.widgetService.updateWidget(this.widgetId, this.widget).subscribe((data: Widget) => {
        this.widget = data;
        this.backToWidgets();
      });
  }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(() => {
      this.backToWidgets();
    });
  }

  backToWidgets() {
    this.router.navigate(['/profile/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
  }

  upload() {
    if (this.file === undefined) {
      alert('no file');
    } else {
      const data = new FormData();
      data.append('myFile', this.file);
      data.append('widgetId', this.widgetId);
      this.widgetService.uploadImage(data).subscribe((mes: any) => {
        this.backToWidgets();
        if (mes.message === 'file uploaded') {
          alert('File Uploaded');
        } else {
          alert('No file uploaded');
        }
      });
    }
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

}

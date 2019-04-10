import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {Website} from '../../../../models/website.model.client';
import {Page} from '../../../../models/page.model.client';
import {Widget} from '../../../../models/widget.model.client';
import {WebsiteService} from '../../../../services/website.service.client';
import {UserService} from '../../../../services/user.service.client';
import {DomSanitizer} from '@angular/platform-browser';
import {PageService} from '../../../../services/page.service.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {NgForm} from '@angular/forms';
import {$} from 'protractor';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
    @ViewChild('f') uploadForm: NgForm;
  user: User = new User('', '', '', '', '', '');;
  website: Website = new Website('', '', '', '');
  page: Page = new Page('', '', '', '');
  widgets: Widget[] = [];
    currWidget: Widget = new Widget('', '', '',
        '', '', '', '', '', true, 1, '');
    newWidget: Widget = new Widget('', '',
        '', '', '', '', '', '',  true, 1, '');
  baseUrl: string;
  selectedFile: File;
  errorFlag: boolean;
  errorMsg = '';

  constructor(private webService: WebsiteService, private userService: UserService, private sanitizer: DomSanitizer,
              private pageService: PageService, private widgetService: WidgetService, private route: ActivatedRoute,
              private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.baseUrl = environment.baseUrl;
      this.userService.findUserById(this.sharedService.user._id).subscribe(
          (user: any) => {
            this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
          }
      );
      this.webService.findWebsiteById(params['websiteId']).subscribe(
          (website: any) => {
            this.website = new Website(website._id, website.name, website.developerId, website.description);
          }
      );
      this.pageService.findPageById(params['pageId']).subscribe(
          (page: any) => {
            this.page = new Page(page._id, page.name, page.websiteId, page.description);
            this.newWidget.pageId = this.page.pageId;
            this.newWidget.type = 'IMAGE';
          }
      );
      this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(
          (widgets: any[]) => {
              for(var i = 0; i < widgets.length; i++) {
                  const widget = widgets[i];
                  const newWid = new Widget(widget._id, widget.type, widget.pageId,
                      widget.size, widget.text, widget.width, widget.url, widget.name,
                      widget.formatted, widget.rows, widget.placeholder);
                  this.widgets.push(newWid);
              }
          }
      );
      this.widgetService.findWidgetById(params['widgetId']).subscribe(
          (widget: any) => {
              if (widget.message !== 'Widget not found!') {
                  this.currWidget = new Widget(widget._id, widget.type, widget.pageId,
                      widget.size, widget.text, widget.width, widget.url, widget.name,
                      widget.formatted, widget.rows, widget.placeholder);
                  this.newWidget.text = this.currWidget.text;
                  this.newWidget.url = this.currWidget.url;
                  this.newWidget.width = this.currWidget.width;
              }
          }
      );
    });

  }

  updateWidget() {
    if (this.currWidget.url !== '') {
      this.currWidget.text = this.newWidget.text;
      this.currWidget.url = this.newWidget.url;
      this.currWidget.width = this.newWidget.width;
      if (this.currWidget.url !== '') {
        this.widgetService.updateWidget(this.currWidget.widgetId, this.currWidget).subscribe(
            (data: any) => {
              this.router.navigate(['/profile/website/' + this.website.websiteId
              + '/page/' + this.page.pageId + '/widget']);
            }
        );
      } else {
          this.errorFlag = true;
          this.errorMsg = 'Url cannot be empty!';
      }
    } else {
      if (this.newWidget.url !== '') {
        this.widgetService.createWidget(this.newWidget.pageId, this.newWidget).subscribe(
            (data: any) => {
              this.router.navigate(['/profile/website/' + this.website.websiteId
              + '/page/' + this.page.pageId + '/widget']);
            }
        );
      } else {
          this.errorFlag = true;
          this.errorMsg = 'Url cannot be empty!';
      }
    }
  }

  onFileChanged(event) {
      this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile);
    uploadData.append('widgetId', this.currWidget.widgetId);
    uploadData.append('newWidgetId', this.newWidget.widgetId);
    uploadData.append('websiteId', this.website.websiteId);
    uploadData.append('pageId', this.page.pageId);
    this.widgetService.uploadImage(uploadData).subscribe(
        (data: any) => {
            if (data.message === 'File uploaded' && data.url !== '') {
                this.newWidget.url = data.url;
            } else {
                this.router.navigate(['/profile/website/'
                + this.website.websiteId + '/page/' + this.page.pageId + '/widget']);
                if (data.message === 'File uploaded') {
                    alert('File uploaded');
                } else if (data.message === 'No file uploaded') {
                    alert('No file uploaded');
                }
            }
        }
    );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.currWidget.widgetId).subscribe(
        (data: any) => {
          this.router.navigate(['/profile/website/' + this.website.websiteId
          + '/page/' + this.page.pageId + '/widget']);
        }
    );
  }


  // judge() {
  //     return this.currWidget.url !== '';
  // }

  // uploads() {
  //     this.widgetService.uploadImage('').subscribe(
  //         (data: any) => {
  //             this.router.navigate(['/profile/' + this.user.uid +
  //             '/website/' + this.website.websiteId + '/page/' + this.page.pageId + '/widget']);
  //         }
  //     )
  // }
}

import { Component, OnInit } from '@angular/core';
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
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})

export class WidgetYoutubeComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');
  website: Website = new Website('', '', '', '');
  page: Page = new Page('', '', '', '');
  widgets: Widget[] = [];
  currWidget: Widget = new Widget('', '', '', '', '', '', '',
      '', true, 1, '');
  newWidget: Widget = new Widget('', '', '', '', '', '', '',
      '', true, 1, '');
  errorFlag: boolean;
  errorMsg = '';

  constructor(private webService: WebsiteService, private userService: UserService, private sanitizer: DomSanitizer,
              private pageService: PageService, private widgetService: WidgetService, private route: ActivatedRoute,
              private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
          (user:any) => {
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
            this.newWidget = new Widget('', 'YOUTUBE', this.page.pageId,
                '', '', '', '', '', true, 1, '');
          }
      );
      this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(
          (widgets: any[]) => {
              for(var i = 0; i < widgets.length; i++) {
                  const widget = widgets[i];
                  const newWid = new Widget(widget._id, widget.type, widget.pageId,
                      widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                  this.widgets.push(newWid);
              }
          }
      );
      this.widgetService.findWidgetById(params['widgetId']).subscribe(
          (widget: any) => {
              if (widget.message !== 'Widget not found!') {
                  this.currWidget = new Widget(widget._id, widget.type, widget.pageId, widget.size,
                      widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
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
        this.widgetService.createWidget(this.page.pageId, this.newWidget).subscribe(
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

  deleteWidget() {
    this.widgetService.deleteWidget(this.currWidget.widgetId).subscribe(
        (data: any) => {
          this.router.navigate(['/profile/website/' + this.website.websiteId
          + '/page/' + this.page.pageId + '/widget']);
        }
    );
  }
}

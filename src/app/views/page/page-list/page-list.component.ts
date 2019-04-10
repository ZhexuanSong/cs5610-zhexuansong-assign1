import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');
  website: Website = new Website('', '', '', '');
  pages: Page[] = [];

  constructor(private webService: WebsiteService, private userService: UserService,
              private pageService: PageService, private route: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
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
      this.pageService.findPageByWebsiteId(params['websiteId']).subscribe(
          (pages: any[]) => {
              for(var i = 0; i < pages.length; i++) {
                  const page = pages[i];
                  const newPage = new Page(page._id, page.name, page.websiteId, page.description);
                  this.pages.push(newPage);
              }
          }
      );
    });
  }

}

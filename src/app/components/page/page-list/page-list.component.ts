import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pages: Page[] = [];

  constructor(private  pageService: PageService,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = params['uid']
      this.websiteId = params['wid'];
      this.pageService.findAllPagesForWebsite(params['wid']).subscribe(
        (pages: any) => {
          this.pages = pages;
          console.log('load pages: success');
        });
    });
  }

}

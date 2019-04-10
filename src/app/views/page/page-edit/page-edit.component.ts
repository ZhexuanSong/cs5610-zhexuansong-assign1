import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  websiteId: string;
  pageId: string;
  errorFlag: boolean;
  errorMsg = 'Please enter the name.';

  curPage: Page;
  pages: Page[] = [];

  constructor(private webService: WebsiteService, private pageService: PageService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.curPage = new Page('', '', undefined);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.webService.findWebsiteById(this.websiteId).subscribe((website) => {
        this.pages = website.pages;
      });
      this.pageService.findPageById(this.pageId).subscribe((data: Page) => {
        this.curPage = data;
      });
    });
  }

  updateCurPage() {
    if (this.curPage.name === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.pageService.updatePage(this.pageId, this.curPage).subscribe((data: Page) => {
        this.curPage = data;
        this.backToPages();
      });
    }
  }

  backToPages() {
    this.router.navigate(['/profile/website/' + this.websiteId + '/page']);
  }


  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe(() => {
      this.backToPages();
    });
  }

}

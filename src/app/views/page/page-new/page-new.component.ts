import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  websiteId: string;
  errorFlag: boolean;
  errorMsg = 'Please enter the name.';
  pages: Page[] = [];
  newPage: Page;

  constructor(private webService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute,
              private pageService: PageService) {
    this.newPage = new Page('', '', undefined);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.websiteId;
      this.webService.findWebsiteById(this.websiteId).subscribe((website) => {
        this.pages = website.pages;
      });
    });
  }

  createNewPage() {
    if (this.newPage.name === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.pageService.createPage(this.websiteId, this.newPage).subscribe((data: Page) => {
        this.newPage = data;
        this.router.navigate(['profile/website/' + this.websiteId + '/page']);
      });
    }
  }

}

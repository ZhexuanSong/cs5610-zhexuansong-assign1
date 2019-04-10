import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  websiteId: string;
  pages: Page[] = [];

  constructor(private webService: WebsiteService, private router: Router, private pageService: PageService,
              private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.websiteId;
      this.webService.findWebsiteById(this.websiteId).subscribe((website) => {
        this.pages = website.pages;
      });
    });
  }

}

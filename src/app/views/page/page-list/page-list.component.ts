import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['../../../app.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pages = [];

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        params => {
          return this.pageService.findPageByWebsiteId(params['wid']).subscribe((returnPages: Page[]) => {
            this.userId = params['uid'];
            this.websiteId = params['wid'];
            this.pages = returnPages;
          });

        }
      );
    }

}

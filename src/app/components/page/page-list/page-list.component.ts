import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  webId: String;
  pages: Page[] = [];

  constructor(private pageService: PageService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
        this.pageService.findPageByWebsiteId(params['wid']).subscribe(
          (pages: any) => {
            this.pages = pages;
          }
        );
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from 'src/app/page.service';
import {Page} from 'src/app/model/Page';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId : String;
  websiteId: String;
  pages: Page[];

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router, 
              private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];

      });
    this.pageService.findPagesByWebsite(this.websiteId).subscribe(
      pages => this.pages = pages
    );

    // console.log(this.pages);
  }
  goBack() {
    this.router.navigate(['user', this.userId, 'website']);
  }
  createNewPage() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', 'new']);
  }
  goToEditPage(pageId) {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', pageId]);
  }
  goToWidgetList(pageId) {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', pageId, 'widget']);
  }

}

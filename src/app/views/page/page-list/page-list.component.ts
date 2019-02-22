import { Component, OnInit } from '@angular/core';
import {Page} from '../../../model/page.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PageService} from '../../../service/page.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: string;
  webId: string;
  pages: Page[];
  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.userId = param.uid;
        this.webId = param.wid;
        this.pages = this.pageService.findPageByWebsiteId(this.webId);
        console.log(this.pages);
      }
    );
  }

  // clickPage(page: Page) {
  //   this.router.navigate([page.id, 'widget'], {relativeTo: this.activatedRoute});
  // }

}

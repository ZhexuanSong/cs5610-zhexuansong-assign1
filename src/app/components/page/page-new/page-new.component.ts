import {Component, OnInit} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  newpage: Page;
  userId: string;
  websiteId: string;
  newPageName: string;
  newPageDescrption: string;
  errorFlag: boolean;
  errorMsg = "Page name can't  be empty!";

  constructor(private  pageService: PageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      console.log('page-new, user_id = ' + this.userId + ', website id = ' + this.websiteId);
    });
  }

  createPage() {
    if (! this.newPageName) {
      this.errorFlag = true;
    } else {
      this.newpage = new Page('', this.newPageName, this.websiteId, this.newPageDescrption);
      this.pageService.createPage(this.websiteId, this.newpage).subscribe(
        (page: Page) => {
          this.newpage = page;
          this.router.navigate(['../'], {relativeTo: this.route});
          console.log('create new page', this.newpage._id);
        }
      );
    }
  }

}

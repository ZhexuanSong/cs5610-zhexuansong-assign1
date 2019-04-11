import {Component, OnInit} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  page: Page;
  userId: string;
  websiteId: string;
  errorFlag: boolean;
  errorMsg = "Website name can't  be empty!";

  constructor(private  pageService: PageService,
              private route: ActivatedRoute,
              private router: Router) {
    this.page = new Page();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageService.findPageById(params['pid']).subscribe(
        (page: Page) => {
          this.page = page;
          console.log('page-edit: page id = ' + this.page._id);
        }
      );
    });
  }

  updatePage(page: Page) {
    if (!this.page.name) {
      this.errorFlag = true;
    } else {
      this.pageService.updatePage(this.page._id, page).subscribe(
        (u_page: Page) => {
          this.router.navigate(['../'], {relativeTo: this.route});
          console.log('page-update success: page id = ' + this.page._id);
        }
      );
    }
  }

  deletePage() {
    this.pageService.deletePage(this.page._id).subscribe(
      (d_page: Page) => {
        this.router.navigate(['../'], {relativeTo: this.route});
        console.log('page-delete success: page id = ' + this.page._id);
      }
    );
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PageService} from '../../../service/page.service';
import {Page} from '../../../model/page.model';
import {Website} from '../../../model/website.model';
import {WebsiteService} from '../../../service/website.service';

class Param {
}

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('editPageForm') editPageForm: NgForm;

  pageId: string;
  page: Page;
  userId: string;
  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService, private websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.pageId = param.pid;
        this.page = this.pageService.findPageById(this.pageId);
        this.userId = param.uid;
      }
    );
  }

  editPage() {
      const name = this.editPageForm.value.pageName;
      const title = this.editPageForm.value.pageTitle;
      this.pageService.updatePage(this.pageId, new Page(this.pageId, name, this.page.websiteId, title));
      alert( 'save successfully');
      this.router.navigate(['../'],{relativeTo: this.activatedRoute});
  }

  deletePage() {
    this.pageService.deletePage(this.pageId);
    this.router.navigate(['../'],{relativeTo: this.activatedRoute});
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from 'src/app/model/Page';
import {PageService} from 'src/app/page.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;
  oldPage: Page;
  websiteId: String;
  userId: String;
  pageId: String;
  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.oldPage = new Page("", "", "", "");

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        // console.log(params);
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      });
    this.pageService.findPageById(this.pageId).subscribe(
      page => this.oldPage = page
    )
  }

  updatePage() {
    let newName = this.pageForm.value.pageName;
    let newTitle = this.pageForm.value.pageTitle;
    let page = new Page(this.pageId, newName, this.websiteId, newTitle);
    this.pageService.updatePage(this.pageId, page).subscribe(
      () => this.goBack()
    );
  }
  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe(
      () => this.goBack()
    );
  }
  goBack() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }
  displayOldName() {
    return this.oldPage.name;
  }
  displayOldTitle() {
    return this.oldPage.title;
  }

}

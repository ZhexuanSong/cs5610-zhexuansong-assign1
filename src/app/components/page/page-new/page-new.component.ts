import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PageService} from 'src/app/page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from 'src/app/model/Page';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;
  userId: String;
  websiteId: String;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      });
  }
  savePage() {
    let name = this.pageForm.value.pageName;
    let title = this.pageForm.value.pageTitle;
    let page = new Page("", name, this.websiteId, title);
    this.pageService.createPage(page, this.websiteId).subscribe(
      page => this.goBack()
    );

  }
  goBack() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/page.model.client';
import { PageService } from '../../../services/page.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})

export class PageEditComponent implements OnInit {
  page: Page;
   _id: String;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  updatePage() {
    this.pageService.updatePage(this.page._id, this.page).subscribe(
      (page: Page) => {
        this.page = page;
        console.log('update page: ' + page._id + ' ' + page.name);
      }
    );
  }

  deletePage() {
    this.pageService.deletePage(this.page._id).subscribe(
      (data: Page) => {
        console.log('delete page: ' + this.page._id);
      },
      (error: any) => console.log(error)
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageService.findPageById(params['pid']).subscribe(
        (page: Page) => {
          this.page = page;
        }
      );
    });
  }
}

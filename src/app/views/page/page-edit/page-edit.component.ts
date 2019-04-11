import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

    userId: String;
    websiteId: String;
    pages: any;
    pageId: String;
    page: any;

    constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) {}

    updatePage() {
        this.pageService.updatePage(this.pageId, this.page).subscribe((page: any) => {
            console.log('update page: ' + page._id + ' ' + page.name);
        });
    }
    deletePage() {
        this.pageService.deletePage(this.pageId).subscribe((data: any) => {
            console.log('delete page: ' + this.page._id);
        });
    }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(
                (params: any) => {
                    this.userId = params['uid'];
                    this.websiteId = params['wid'];
                    this.pageId = params['pid'];
                }
            );
        this.pageService.findPageById(this.pageId).subscribe((page: any) => {
            this.page = page;
        });
        console.log(this.page);
    }

}

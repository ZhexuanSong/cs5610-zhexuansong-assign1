import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

    userId: String;
    websiteId: String;
    page = {name: '', title: ''};
    constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) {}
    createPage() {
        this.pageService.createPage(this.websiteId, this.page).subscribe((page: any) => {
            console.log('create page: ' + page._id + ' ' + page.name);
            this.page = page;
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.userId = params['uid'];
                this.websiteId = params['wid'];
            }
        );
    }
}

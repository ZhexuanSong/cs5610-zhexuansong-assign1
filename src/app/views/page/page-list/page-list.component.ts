import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {

    websiteId: String;
    pages: any;
    constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.websiteId = params['wid'];
            }
        );
        this.pageService.findPagesByWebsiteId(this.websiteId).subscribe((data: any) => {
            this.pages = data;
            console.log(data);
        });
    }
}

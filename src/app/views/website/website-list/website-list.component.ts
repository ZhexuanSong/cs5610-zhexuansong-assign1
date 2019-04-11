import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {

  userId: String;
  websites: any;

    constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.userId = params['uid'];
            }
        );
        console.log('userId: ' + this.userId);
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe((data: any) => {
                this.websites = data;
                console.log(data);
            });
    }
}


import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {

  userId: String;
  websites: any;
  user: any;

    constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

    ngOnInit() {
        this.user = this.sharedService.user;
        this.userId = this.user._id;
        console.log('userId: ' + this.userId);
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe((data: any) => {
                this.websites = data;
                console.log(data);
            });
    }
}


import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  website = {name: '', description: ''};
  websites: any;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  createWebsite() {
    this.websiteService.createWebsite(this.userId, this.website).subscribe((website: any) => {
      this.website = website;
      this.websiteId = website._id;
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
    );
    this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((data: any) => {
          this.websites = data;
        });
    console.log(this.websites);
  }

}

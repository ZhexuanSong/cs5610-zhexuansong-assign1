import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') webForm: NgForm;
  userId: String;
  websites: Website[] = [];
  website: Website;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });
    this.websiteService.findWebsitesByUser(this.userId).subscribe(
      (websites: any) => {
        this.websites = websites;
      },
      (error: any) => {
        console.log(error);
      });
    this.website = WebsiteService.getNewWebsite();
  }

  createWebsite() {
    this.website.name = this.webForm.value.name;
    this.websiteService.createWebsite(this.userId, this.website).subscribe(
      (website: Website) => {
        this.website = website;
        console.log('created website: ' + this.website._id + ' ' + this.website.name);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

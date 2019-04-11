import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') myWebForm: NgForm;
  userId: String;
  websiteId: String;
  website: any;
  websites: any;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  createWebsite() {
    this.website = {
      name: this.myWebForm.value.websitename,
      description: this.myWebForm.value.description,
      _user: this.userId,
    };
    this.websiteService.createWebsite(this.userId, this.website).subscribe((website: any) => {
      this.website = website;
      this.websiteId = website._id;
    });
  }

  ngOnInit() {
    const user = this.sharedService.user;
    this.userId = user._id;
    console.log(this.userId);
    this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((data: any) => {
          this.websites = data;
        });
    console.log(this.websites);
  }

}

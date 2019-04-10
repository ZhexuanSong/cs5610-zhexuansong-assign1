import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') webForm: NgForm;

  userId: String;
  websites: any;
  website: any;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
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
      (websites: any) => {
        console.log('created website');
        this.router.navigate(['..'], {relativeTo: this.activatedRoute});
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

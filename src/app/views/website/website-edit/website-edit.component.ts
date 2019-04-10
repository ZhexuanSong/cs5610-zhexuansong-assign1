import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
    @ViewChild('f') myWebForm: NgForm;
  websiteId: String;
  website: any;
  websites: any;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  updateWebsite() {
    this.website._id = this.websiteId;
    this.website.name = this.myWebForm.value.websitename;
    this.website.description = this.myWebForm.value.description;
    this.websiteService.updateWebsite(this.websiteId, this.website).subscribe();
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe();
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
        }
    );
    this.websiteService.findWebsiteById(this.websiteId).subscribe(
        (website: any) => {
          this.website = website;
          console.log(this.website);
            this.websiteService.findWebsitesByUser(this.website._user)
                .subscribe((data: any) => {
                    this.websites = data;
                    console.log(this.websites);
                });
        });
  }

}

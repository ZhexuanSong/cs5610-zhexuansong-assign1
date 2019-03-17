import { Component, OnInit, ViewChild } from '@angular/core';
import {WebsiteService} from 'src/app/website.service';
import {Website} from 'src/app/model/Website';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') websiteForm: NgForm;
  userId: String;

  constructor(private websiteService : WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( (params: any) => { this.userId = params['uid']});
  }
  saveWebsite() {
    let website = new Website("", this.websiteForm.value.newName, this.userId, this.websiteForm.value.newDescription);
    this.websiteService.createWebsite(website, this.userId).subscribe(
      (website) => this.router.navigate(['/user', this.userId, 'website'])
    );


  }


}

import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params => {
          return this.websiteService.findWebsiteByUser(params['uid']).subscribe((returnWebsites: Website[]) => {
            this.userId = params['uid'];
            this.websites = returnWebsites;
          });
        }
      );
  }
}

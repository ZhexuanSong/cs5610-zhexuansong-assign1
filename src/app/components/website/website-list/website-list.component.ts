import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  websites: Website[];


  constructor(private userService: UserService,
              private websiteService: WebsiteService,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.router.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteService.findAllWebsitesForUser(params['uid']).subscribe(
        (websites: any) => {
          this.websites = websites;
        }
      );
    });
  }

}

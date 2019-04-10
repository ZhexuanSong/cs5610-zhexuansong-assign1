import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../../models/widget.model.client';
import {SharedService} from '../../../../../services/shared.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  uid: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;
  searched: boolean = false;

  constructor(private flickrService: FlickrService, private widgetService: WidgetService,
              private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.websiteId = params['websiteId'];
              this.pageId = params['pageId'];
              this.widgetId = params['widgetId'];
              this.uid = this.sharedService.user._id;
            }
        );
  }

  searchPhotos() {
    this.flickrService
        .searchPhotos(this.searchText)
        .subscribe(
            (data: any) => {
              let val = data;
              val = val.replace('jsonFlickrApi(', '');
              val = val.substring(0, val.length - 1);
              val = JSON.parse(val);
              this.photos = val.photos;
              this.searched = true;
            }
        );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    const widget = new Widget(this.widgetId, 'IMAGE', this.pageId, '', '',
        '', url, '', true, 1, '');

    this.widgetService
        .updateWidget(this.widgetId, widget)
        .subscribe(
            (data: any) => {
                this.router.navigate(['/profile/website/'
                + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId + '/edit/image']);
              }
        );
  }

}

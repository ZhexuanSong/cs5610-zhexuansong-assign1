import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  websiteId: String;
  pageId: String;
  userId: String;
  widgetId: String;
  widget: any;
  photos: [any];
  error: String;
  searchText: String;

  constructor(private flickrService: FlickrService,
              private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {

    // fetch userId from shared service
    this.userId = this.sharedService.user['_id'];

    // fetch userId, pageId and websiteId from url
    this.activatedRoute.params.subscribe((params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.userId = params['uid'];

          if (this.widgetId === '') {
            this.widget = WidgetService.getNewWidget();
          } else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(
              (widget: any) => {
                this.widget = widget;
              },
              (error: any) => console.log(error)
            );
          }
        }
      );
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    this.widget.url = url;

    if (this.widgetId === '') {
      this.widget.type = 'Image';
      this.widget.pageId = this.pageId;
      this.create(this.widget);
    } else {
      this.update(this.widget);
    }
  }

  create(widget: any) {
    this.widgetService.createWidget(this.pageId, widget).subscribe(
      (widgets: any) => {
        this.widgetId = widgets[widgets.length - 1]._id;
        console.log('create new widget Image');
        this.route();
      },
      (error: any) => console.log(error)
    );
  }

  update(widget: any) {
    this.widgetService
      .updateWidget(this.widgetId, widget)
      .subscribe(
        (response: any) => {
          console.log('updated Image url using Flickr');
          this.route();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  route() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
  }
}

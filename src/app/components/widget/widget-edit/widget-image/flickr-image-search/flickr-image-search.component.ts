import {Component, Input, OnInit} from '@angular/core';
import {FlickrService} from '../../../../../flickr.service';
import {Widget} from '../../../../../model/Widget';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../../widget.service';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  photos: any;
  searchText: string;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;

  constructor(private flickrService: FlickrService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.photos = {};
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        // console.log(params);
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
      });
    this.widgetService.findWidgetById(this.widgetId).subscribe(
      widget => this.widget = widget
    );
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        val => {
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1); // remove the last parenthese
          const fasdf = JSON.parse(val);
          this.photos = fasdf.photos;
        }
      );
  }
  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_m.jpg';
    this.widget.url = url;
    this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(
      () => this.goBack());
  }
  goBack() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);

  }
}

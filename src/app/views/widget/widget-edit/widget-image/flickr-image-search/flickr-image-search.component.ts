import {Component, OnInit} from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../../services/widget.service.client';
import {Widget} from '../../../../../models/widget.model.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  websiteId: string;
  pageId: string;
  widgetId: string;

  widget: Widget;

  photos: [any];
  errors: string;
  searchText: string;

  constructor(private router: Router, private filckrService: FlickrService, private activatedROute: ActivatedRoute,
              private widgetService: WidgetService) {

  }

  ngOnInit() {
    this.activatedROute.params.subscribe(params => {
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.widgetId = params.widgetId;
      this.widgetService.findWidgetById(this.widgetId).subscribe((data: Widget) => {
        this.widget = data;
      });
    });

  }

  searchPhotos() {
    if (!this.searchText) {
      alert('Please input the search infor');
    } else {
      this.filckrService.searchPhotos(this.searchText).subscribe((data: any) => {
        let val = data;
        val = val.replace('jsonFlickrApi(', '');
        val = val.substring(0, val.length - 1);
        val = JSON.parse(val);
        this.photos = val.photos.photo;
      });
    }

  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    console.log('flickr: ' + url);

    const widget = new Widget(this.widget.type, undefined, this.pageId, this.widget.size,
      this.widget.text, this.widget.width, url, undefined, undefined, undefined);

    widget._id = this.widget._id;

    this.widgetService
      .updateWidget(this.widgetId, widget)
      .subscribe(
        (data: any) => {
          if (data) { this.router.navigate(['/profile/website/' + this.websiteId + '/page/' +
          this.pageId + '/widget']);
          } else {
            this.errors = 'failed!';
          }
        }
      );
  }


}

/**
 * Created by mayankrd on 8/16/17.
 */
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable() // needed as we're injecting Http service into this service
export class FlickrService {

  key = '78bb6902bcde78319e867c796eb9f5d6';
  secret = '2435fa6c2be5be28';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }
}

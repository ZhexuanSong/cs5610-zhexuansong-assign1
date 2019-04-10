import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FlickrService {
  key = 'b8980fb0b4751b1a0845093050bb993e';
  secret = 'c0d0c4a23a6d6f75';
  flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=${this.key}&text=`;

  constructor(private http: HttpClient) {}

  searchPhotos(searchItem: any) {
    const url = this.flickrUrl + searchItem;
    console.log(url);
    return this.http.get(url, {responseType: 'text'});
  }
}

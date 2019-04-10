import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable() // needed as we're injecting Http service into this service
export class FlickrService {

    key = 'a32a09860e5dde7b565eacf533abafd8';
    secret = '8ec236b3e00d96c5';
    urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

    constructor(private _http: HttpClient) {}

    searchPhotos(searchTerm: any) {
        const url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url, {responseType: 'text'});
    }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable() // needed as we're injecting Http service into this service
export class FlickrService {

    key = 'cce8ef707ea5e569babd7cdb9b31d183';
    secret = '1115a7df37ac28a4';
    urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

    constructor(private _http: HttpClient) {}

    searchPhotos(searchTerm: any) {
        const url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url, {responseType: 'text'});
    }
}

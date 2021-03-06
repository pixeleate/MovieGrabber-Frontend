import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const baseurl = '/backend/';

@Injectable()
export class VideoService {

  constructor(private _http: Http) {

  }

  shortPopular() {
    const search = new URLSearchParams();
    search.set('type', 'movies');
    search.set('format', 'json');
    const options = new RequestOptions({ params: search });
    return this._http.get(baseurl + 'media/getPopular', options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  shortPopularTV() {
    const search = new URLSearchParams();
    search.set('type', 'tvshow');
    search.set('format', 'json');
    const options = new RequestOptions({ params: search });
    return this._http.get(baseurl + 'media/getPopular', options)
      .map(response => response.json())
      .catch(this.handleError);
  }


  search(query) {
    const search = new URLSearchParams();
    search.set('q', query);
    search.set('format', 'json');
    const options = new RequestOptions({ params: search });
    return this._http.get(baseurl + 'media/search', options)
      .map(response => response.json().shows)
      .catch(this.handleError);
  }

  detail(id) {
    const search = new URLSearchParams();
    search.set('id', id);
    search.set('format', 'json');
    const options = new RequestOptions({ params: search });
    return this._http.get(baseurl + 'media/getDetails', options)
      .map(response => response.json())
      .catch(this.handleError);
  }
  getLinks(id) {
    const search = new URLSearchParams();
    search.set('id', id);
    search.set('format', 'json');
    const options = new RequestOptions({ params: search });
    return this._http.get(baseurl + 'media/getLinks', options)
      .map(response => response.json())
      .catch(this.handleError);
  }
  decodeGFile(file) {
    const search = new URLSearchParams();
    search.set('format', 'json');
    const options = new RequestOptions({ params: search });
    return this._http.get(baseurl + 'media/decodeGFile/' + file, options)
      .map(response => response.json())
      .catch(this.handleError);
  }
  getRecommended(id) {
    const search = new URLSearchParams();
    search.set('id', id);
    search.set('format', 'json');
    const options = new RequestOptions({ params: search });
    return this._http.get(baseurl + 'account/fiverecommended', options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any, caught: any): any {
    console.log(error, caught);
  }

}

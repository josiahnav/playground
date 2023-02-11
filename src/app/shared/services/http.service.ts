import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) { }

  add(): Observable<any> {
    return this._http.post(`${this.url}/add`, 'item');
  }

  remove(): Observable<any> {
    return this._http.delete(`${this.url}/remove`);
  }

  edit(): Observable<any> {
    return this._http.put(`${this.url}/edit`, 'item');
  }

}

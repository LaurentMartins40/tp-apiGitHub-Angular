import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const QUERY_HTTP_GIT: string = "https://api.github.com/users/";


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }
  getUser(user) {
    return this.http.get(`${QUERY_HTTP_GIT}${user}`);
  }
  getUrl(url) {
    return this.http.get(`${url}`);
  }
}

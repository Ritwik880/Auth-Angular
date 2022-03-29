import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  limit: number = 10;
  url: any = `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${this.limit}`
  constructor(private http: HttpClient) { }
  users() {
    return this.http.get(this.url);


  }
}

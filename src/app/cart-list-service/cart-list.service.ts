import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class CartListService {
  constructor(private http: Http) { }
    getLatestList(page: number = 1) {
      return this.http.get(`${BASE_URL}`);
    }

}

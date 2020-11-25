import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getItemList() {
    //Connects to https://fetch-hiring.s3.amazonaws.com/hiring.json to retreive JSON data
    //URL shortened for proxy/CORS, to see full api URL, see proxy.config.json in root folder.
    return this.http.get<Item[]>('/hiring.json');
  }
}

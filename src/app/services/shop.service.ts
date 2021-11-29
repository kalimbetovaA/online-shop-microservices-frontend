import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseURL = 'http://localhost:8762';
  constructor(private http: HttpClient) {}

  getShops(){
    return this.http.get<any>(this.baseURL + `/shops`);
  }
}

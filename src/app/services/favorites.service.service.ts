import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  baseURL = 'http://localhost:8762';
  constructor(private http: HttpClient) {}

  setFavorites(customerId: string, productId: string){
    return this.http.post<any>(`http://localhost:8762/fav/customer/${customerId}/add?productId=${productId}`, {})
        .subscribe(data => {
        })
  }

  getFavorites(customerId: string | null){
    return this.http.get<any>(this.baseURL + `/fav/customer/${customerId}`);
  }
}

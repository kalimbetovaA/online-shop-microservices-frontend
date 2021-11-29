import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'http://localhost:8762';
  constructor(private http: HttpClient) {}

  getUser(username: string | null){
    console.log(username);
    return this.http.get<any>(this.baseURL + `/customers/username/${username}`);
  }

  getUserCart(id: string | null){
    return this.http.get<any>(this.baseURL + `/shopping-cart/customer/${id}/cart`);
  }

  addOrder(id: string | null){
    console.log('order')
    return this.http.post<any>(this.baseURL + `/orders/customer/${id}`, {})
        .subscribe(data => {
        })
  }

  getUserOrders(id: string | null){
    return this.http.get<any>(this.baseURL + `/orders/customer/${id}`);
  }


}

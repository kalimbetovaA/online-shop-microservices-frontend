import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:8762';
  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get<any>(this.baseURL + `/products`);
  }

  getProduct(id: string | null){
    return this.http.get<any>(this.baseURL + `/products/${id}`);
  }

  addProduct(id: string, userId: string){
  console.log(' add product'+userId+' '+id);
    return this.http.post<any>(`http://localhost:8762/shopping-cart/customer/${userId}/addCartItem?productId=${id}&quantity=1`, {})
        .subscribe(data => {
        })
  }

  returnProduct(id: string){
    return this.http.get<any>(this.baseURL + `/users/me/return?bookId=${id}`).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }
}

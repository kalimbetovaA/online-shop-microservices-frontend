import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseURL = 'http://localhost:8762';
  constructor(private http: HttpClient) {}

  getCategories(){
    return this.http.get<any>(this.baseURL + `/product-categories`);
  }

  getCategoryBooks(id: string | null){
    return this.http.get<any>(this.baseURL + `/product-categories/${id}/products`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseURL = 'http://localhost:8762';
  constructor(private http: HttpClient) {}

  setReview(productId: string, customerId: string, message: string){
    return this.http.post<any>(`http://localhost:8762/review?productId=${productId}&customerId=${customerId}&message=${message}`, {})
        .subscribe(data => {
        })
  }

  getReview(productId: string | null){
    return this.http.get<any>(this.baseURL + `/review/${productId}`);
  }
}

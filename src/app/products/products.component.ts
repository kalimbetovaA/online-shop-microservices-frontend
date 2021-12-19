import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {UserService} from "../services/user.service";
import {ReviewService} from "../services/review.service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  user: any;
  products: any;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products; });
  }

  onReturnSubmit(id: string): void {
    this.productService.returnProduct(id);
  }

}

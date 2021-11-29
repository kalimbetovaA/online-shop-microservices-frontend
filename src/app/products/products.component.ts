import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService, private userService: UserService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products; });;
  }

  onReturnSubmit(id: string): void {
    this.productService.returnProduct(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {

  userProducts: any;
  private user: any;
  orders: any;

  constructor(private userService: UserService, private productService: ProductService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe(user => {
      this.user = user;
      console.log(user.id+' test');
    });
    this.userService.getUserCart(this.user.id).subscribe(userProducts => {
      this.userProducts = userProducts;
      console.log(' test');
      console.log(this.userProducts);
    });
    console.log(this.userProducts+' test');
  }

  getProduct(id: string): any {
    this.productService.getProduct(id).subscribe(product => {
      return product;
    });
  }

  order(): void {
    console.log('order1')
    this.userService.addOrder(this.user.id);
  }

  onSubmitOrder(): void {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe(user => {
      this.user = user;
    });
    this.userService.getUserOrders(this.user.id).subscribe(orders => {
     this.orders = orders;
      console.log(this.orders[0]+' testorder');
    });

    console.log(this.orders);
  }

}

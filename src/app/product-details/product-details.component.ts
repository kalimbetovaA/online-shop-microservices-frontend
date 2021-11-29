import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  private user: any;

  constructor(private productService: ProductService, private userService: UserService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
      this.productService.getProduct(params.get('id')).subscribe(product => {
        this.product = product; });
    });
  }

  onSubmit(id: string): void {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe(user => {
      this.user = user; });
    console.log(this.user.id+' test')
    this.productService.addProduct(id, this.user.id);
    console.log(' test2')
  }

  

}

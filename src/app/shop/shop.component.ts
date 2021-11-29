import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {ShopService} from "../services/shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  shops: any;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getShops().subscribe(shops => {
      this.shops = shops; });;
  }

}

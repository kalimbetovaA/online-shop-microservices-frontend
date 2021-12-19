import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import {ReviewService} from "../services/review.service.service";
import {NgForm} from "@angular/forms";
import {FavoritesService} from "../services/favorites.service.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @ViewChild('form') userForm!: NgForm;
  product: any;
  private user: any;
  reviews: any;
  customer: any;
  message!: string;

  constructor(private productService: ProductService, private userService: UserService,
              private reviewService: ReviewService, private activatedRouter: ActivatedRoute,
              private favoritesService: FavoritesService) { }

  ngOnInit(): void {

    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
      this.productService.getProduct(params.get('id')).subscribe(product => {
        this.product = product; });
      this.reviewService.getReview(params.get('id')).subscribe(review => {
        this.reviews = review;
      });});

  }

  onSubmit(id: string): void {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe(user => {
      this.user = user; });
    console.log(this.user.id+' test')
    this.productService.addProduct(id, this.user.id);

  }

  onFavSubmit(id: string): void {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe(user => {
      this.user = user; });
    console.log(this.user.id+' add to fav')
    this.favoritesService.setFavorites(this.user.id, id);

  }

  onFormSubmit(){
    this.userService.getUser(sessionStorage.getItem('username')).subscribe(user => {
      this.user = user;
      console.log(" test "+ this.user.id +  this.message);
      this.reviewService.setReview(this.product.id, this.user.id, this.message)
    });

  }


  getCustomer(id: string): string{

    return 'anonymous';
}

  

}

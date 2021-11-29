

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuardService} from './guard/auth-guard.service';
import {UserProductsComponent} from "./profile/user-products/user-products.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import {ShopComponent} from "./shop/shop.component";
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shops', component: ShopComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent}
];

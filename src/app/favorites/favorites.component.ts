import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {FavoritesService} from "../services/favorites.service.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  fav:any
  user:any

  constructor(private favoritesService: FavoritesService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe(user => {
      this.user = user;
      this.favoritesService.getFavorites(this.user.id).subscribe(fav => {
        console.log(fav);
        this.fav = fav; });
    });

  }

}

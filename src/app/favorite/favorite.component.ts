import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  //Variable for class
  isFavorite: boolean;

  //For FA-Icon
  faStar = faStar;

  onClick(){
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {
  }

}

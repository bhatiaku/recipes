import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'learn-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("chole", "punjabi dish", "https://www.tarladalal.com/members/9306/big/big_chole_(_chaat_recipe)-8398.jpg?size=696X905"),
    new Recipe("chole", "punjabi dish", "https://www.tarladalal.com/members/9306/big/big_chole_(_chaat_recipe)-8398.jpg?size=696X905"),
    new Recipe("chole", "punjabi dish", "https://www.tarladalal.com/members/9306/big/big_chole_(_chaat_recipe)-8398.jpg?size=696X905"),
    new Recipe("chole", "punjabi dish", "https://www.tarladalal.com/members/9306/big/big_chole_(_chaat_recipe)-8398.jpg?size=696X905"),
    new Recipe("chole", "punjabi dish", "https://www.tarladalal.com/members/9306/big/big_chole_(_chaat_recipe)-8398.jpg?size=696X905"),
    new Recipe("chole", "punjabi dish", "https://www.tarladalal.com/members/9306/big/big_chole_(_chaat_recipe)-8398.jpg?size=696X905")
  ]

  constructor() { }

  ngOnInit() {
  }

}

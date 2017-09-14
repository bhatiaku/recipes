import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'learn-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("chole", "punjabi chole", "https://www.tarladalal.com/members/9306/big/big_chole_(_chaat_recipe)-8398.jpg?size=696X905"),
    new Recipe("Rajhma", "batoore", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIab-K2Xf-bmUQWNJsv_8iUAKA3OKspU1R5JervIJ8OstDk7n"),
  ]
  @Output() rs = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    console.log("emitted")
    this.rs.emit(recipe);
  }

}

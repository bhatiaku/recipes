import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "./recipe.model"

@Component({
  selector: 'learn-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
	@Input() selectedRecipe: Recipe

  constructor() { }

  ngOnInit() {
  }

  doSelectRecipe(data:Recipe){
  	console.log("data")
  	this.selectedRecipe = data;
  	console.log(this.selectedRecipe)
  }

}

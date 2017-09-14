import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'learn-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() currentRecipeItem: Recipe  
  constructor() { }

  ngOnInit() {
  }

}

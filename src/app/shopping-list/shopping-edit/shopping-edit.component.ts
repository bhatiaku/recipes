import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'learn-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddIngredient = new EventEmitter<Ingredient>()
  @ViewChild('inName') name: ElementRef;
  @ViewChild('inAmount') amount: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
     const ingrediant = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
     this.onAddIngredient.emit(ingrediant);
  }

}

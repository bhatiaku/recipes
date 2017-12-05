import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[learnExpand]'
})
export class ExpandDirective {


  @HostBinding('class.open') toggleClass:boolean = false;

  @HostListener("click") toggleOpen(){
  	console.log("toggle open")
  	this.toggleClass = !this.toggleClass;
  }

  constructor() { 
  	// console.log("hello from directive")

  }

  

}

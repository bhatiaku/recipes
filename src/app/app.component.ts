import { Component } from '@angular/core';

@Component({
  selector: 'learn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';
  feature: string = 'recipes'

  onFeatureSelected(event){
  	this.feature = event
  }
}

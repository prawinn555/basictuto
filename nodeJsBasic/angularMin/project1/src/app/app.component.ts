import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
   <div>
	      <h1>Demo1 : using tag reference</h1> 
	      <app-demo1></app-demo1>
	      
	      <h1>Demo2 : using ngModel / FormsModule </h1> 
	      <app-demo2></app-demo2>
	          
	    
    </div>
  `,
  styles: [
  ]
})
export class AppComponent {

}
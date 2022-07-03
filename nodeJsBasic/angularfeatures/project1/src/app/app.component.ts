import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
   <div>
          <img src="assets/angular_logo.png" />
	      <h1>Demo1 : using tag reference</h1> 
	      <app-demo1></app-demo1>
	      
	      <h1>Demo2 : using ngModel / FormsModule </h1> 
	      <app-demo2></app-demo2>
	          
	      <h1>Demo3 : using ngFor ngIf & passing values </h1> 
	      <app-demo3 [inputParam]="{data:['a', 'b', 'c']}"  (outEvent)="showAlert($event)" ></app-demo3>
    </div>
  `,
  styles: [
  ]
})
export class AppComponent {
	
	showAlert(v: object) {
	  alert('the parent is receiving ' +JSON.stringify(v));
	}

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  template: `
   <div>
   
   <p>
    In this demo, we will show simple data bindings.
    
   </p>
         <h1>Basic data bindings and events</h1>
	    <div  class="alert alert-primary">
	      This is a message to show : {{message}}
	    </div>

         <h1>Event and Input</h1>
	    <div  class="alert alert-primary">
	      This is a message to show : {{message}}, counter = {{counter}}, 
	      current input = {{currentInput}}, 
	    </div>
	    
	    <div class="m-1">
	    Number to add to a counter : <input #testInput placeholder="123" value="10" />
	    
	    <a 	href="https://angular.io/guide/template-reference-variables"
	        target="_blank"
			class="link-info m-1">ℹ️ Learn more about 'Template reference variables'</a>
	    </div>


	    <div  class="alert alert-primary">
	      counter = {{counter}}, 
	      Added amount : {{currentInput}}, 
	    </div>
	    

	    <button [class]="'btn btn-primary'" (click)="addCounter(testInput.value)" >Add counter</button>
	    
	   <a 	href="https://angular.io/guide/event-binding"
		    target="_blank"
			class="link-info m-1">ℹ️ Learn more about 'Event bindings'</a>


    </div>
  `,
  styles: [
    `
    
    `
  ]
})
export class Demo1Component implements OnInit {
  message: String = 'Hello !!! How are you?';

  counter = 0;
  
  currentInput: string|number = '-';
  
  constructor() { }

  ngOnInit(): void {
  }
  
  addCounter(v: string) {
	var v2 : number = parseInt(v);
	this.currentInput = v2;
	this.counter = this.counter? this.counter : 0; // eliminate NaN
	this.counter+=v2;
  }
}
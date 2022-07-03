import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  template: `
   <div>
	    <p class="bg-color">
	      {{message}}, counter = {{counter}}, 
	      current input = {{currentInput}}, 
	    </p>
	    
	    Number to add <input #testInput [value]="currentInput" />
	    see https://angular.io/guide/template-reference-variables
	    <br/>
	    
	    <br/>
	    <button (click)="addCounter(testInput.value)" >Add counter</button>
	    see https://angular.io/guide/event-binding
	    <br/>
	    

	    
	    
    </div>
  `,
  styles: [
    `
    
    `
  ]
})
export class Demo1Component implements OnInit {
  message: String = 'single-file works!';

  counter = 0;
  
  currentInput = 1;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  addCounter(v: string) {
	var v2 : number = parseInt(v);
	this.currentInput = v2;
	this.counter+=v2;
  }
}
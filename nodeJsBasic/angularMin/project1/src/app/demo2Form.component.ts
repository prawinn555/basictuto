import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  template: `
   <div>
	    
     Name :  <input [(ngModel)]="name" #ctrl="ngModel" required />

    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>

    <button (click)="reset()">reset</button>
	    
	    
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class Demo2Component {
  name: string = '';

  reset() {
    this.name = 'default name';
  }
}
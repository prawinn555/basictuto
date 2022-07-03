import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  template: `
   <div>
	    
     Name * :  <input [(ngModel)]="name" #ctrl="ngModel" required />
	<br/>
	Country : <select [(ngModel)]="selectedValue"  (change)="showCountry()" >
	  <option [ngValue]="undefined">not selected</option>
	  <option *ngFor="let c of countries" [ngValue]="c">{{c.name}}</option>
	</select>
    
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
  selectedValue : any;
  countries = [ 
	{ id: 'fr', name : 'France' }, 
    { id: 'uk', name : 'UK' },
    { id: 'th', name : 'Thailand' } ] ;
  reset() {
    this.name = 'default name';
  }
  showCountry() {
	console.log('country', this.selectedValue);
}
}
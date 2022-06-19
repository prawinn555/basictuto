import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo3',
  template: `
   <div>
	    data passed from parent {{inputParam | json}}
	    <br/>
	    
	    Number to test  <input [(ngModel)]="num" #ctrl="ngModel"  />
	    <br/>
	    <div *ngIf="num && _parseInt(num)%2 === 0" >Even number {{_parseInt(num)}}</div>
	    <div *ngIf="num && _parseInt(num)%2 !== 0" >Odd number {{_parseInt(num)}}</div>
	    
	    <br/>
	    <b>for loop :</b>
	    <div *ngFor="let item of inputParam.data; let index = index">
	       index {{index}} {{item}}
	    </div>
	    
	    <button (click)="sendEvent()" >sendEvent</button>
	    <br/>
	    
    </div>
  `,
  styles: [
    `
    
    `
  ]
})
export class Demo3Component {
  @Input() inputParam : any= {};
  // see  https://angular.io/guide/inputs-outputs
  @Output() outEvent = new EventEmitter<object>();
  
  num = '';

  constructor() { }

  sendEvent() {
	var ev = { childData : this.num };
	this.outEvent.emit(ev);
  }
  
  _parseInt(v:string) {
	 return parseInt(v);
   }
  
}
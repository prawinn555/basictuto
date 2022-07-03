import { Component, Input,Output, EventEmitter } from '@angular/core';
import {CallApiRestService } from './callApiRest.service';
import {MyData} from './myData';
import { Observable } from 'rxjs';

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
	        <button (click)="testRestAPI(false)" >REST API call</button>
	    <br/>
	        <button (click)="testRestAPI(true)" >test call error</button>
	        	    
	    <br/>
	    API call result : {{resultApiCall | json}}
	    <br/>
	    Test async pipe
	    <br/>
	        <button (click)="testRestAPIAsync(false)" >REST API call</button>
	    <br/>
	        <button (click)="testRestAPIAsync(true)" >test call error</button>
	        	   
	    <br/>
	    API call result with asycn pipe: {{resultApiCall$ | async | json}}	    
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
  
  resultApiCall : Array<MyData> = [];

  resultApiCall$ : Observable<MyData>;
  
  constructor(private restApi: CallApiRestService) { }

  sendEvent() {
	var ev = { childData : this.num };
	this.outEvent.emit(ev);
  }
  
  _parseInt(v:string) {
	 return parseInt(v);
   }
   
   testRestAPI(provokeErrorForTest: boolean) {
	  this.resultApiCall = [];
	  // unnecessary to unsubscribe observer with finite value.
	  this.restApi.getData(provokeErrorForTest).subscribe(data => {
		   console.log('got data', data);
           this.resultApiCall.push(data);
      });
      console.log('Demo3Component : subscribe done');
   }
	
   testRestAPIAsync(provokeErrorForTest: boolean) {
	  // unnecessary to unsubscribe observer with finite value.
	  this.resultApiCall$ = this.restApi.getData(provokeErrorForTest);
      console.log('Demo3Component : subscribe done');
   }
}
  

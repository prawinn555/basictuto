import { Component, Input,Output, EventEmitter } from '@angular/core';
import {CallApiRestService } from './callApiRest.service';
import {MyData} from './myData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo3',
  templateUrl : './demo3RxJS.html',
})
export class Demo3Component {
  @Input() inputParam : any= {};
  // see  https://angular.io/guide/inputs-outputs
  @Output() outEvent = new EventEmitter<object>();
  
  num = '';
  
  resultApiCall : Array<MyData> ;

  resultApiCall$ : Observable<MyData>;
  
  constructor(private restApi: CallApiRestService) { }

  sendEvent() {
	var ev = { childData : this.num };
	this.outEvent.emit(ev);
  }
  
   analyse(v:string):string {
	 if(!v) return '';
	 let n = parseInt(v);
	 if(isNaN(n)) {
		return 'INVALID';
	 }
	 return (n%2===0)? 'EVEN' : 'ODD';
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
  

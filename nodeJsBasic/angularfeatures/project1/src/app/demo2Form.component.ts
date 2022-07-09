import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  template: `
   <div>
	
		<p>
		   Let's learn about double bindings / ngForm.  
		</p>
		
		<h1>
		   Form and data bindings
		</h1>
		
		<ul>
		  <li>Binding form data (without using Template variables)</li>
		  <li>Two ways bindings : changes made by the user and made by the application</li>
		  <li>How to use a select input (looping to create options)</li>
	      <li>Using bootstrap to create a form</li>
		</ul>
		
		
		<p>
		  Open console ( CTRL+Shift+i ) to view event logs ('onChange' for example).
		</p>
		
		<form #ngForm1="ngForm"  >
		  <div class="form-group">
		    <label for="firstName">First Name * (required)</label>
		    <input class="form-control" id="firstName"
		           name="firstName"
		    	   [(ngModel)]="firstName" #ngModelfirstName="ngModel" required 
		    	   />
		  </div>
		  <div class="form-group">
		    <label for="country">Country</label>
			<select id="country" name="country"
			    class="form-control" 
			    [(ngModel)]="country"  (change)="showCountry()" >
		  		<option [ngValue]="undefined">not selected</option>
		  		<option *ngFor="let c of countries" [ngValue]="c">{{c.name}}</option>
			</select>
		  </div>

		  	
		  <div class="btn-toolbar my-2"  >


			<button type="button" class="btn btn-primary me-2"
			  	(click)="setDefault()"
			  	>Default value</button>

		  	
		     <button type="button" class="btn btn-outline-primary"
			  	(click)="debugNgModel(ngForm1, ngModelfirstName)"
			  	>Debug ngModel</button>
		  	</div>
		</form>
	  

	    <div class="my-3">
	    
		    <p>firstName: {{ firstName }}</p>
		    <p>Country: {{ country | json }}</p>
		    <p>Is form valide ? ngForm1 : {{ ngForm1.valid}}</p>
			<p>ngModelfirstName is valide? : {{ ngModelfirstName.valid }}</p>
		</div>
	    
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class Demo2Component {
  firstName: string = '';
  country : any;
  countries = [ 
	{ id: 'fr', name : 'France' }, 
    { id: 'uk', name : 'UK' },
    { id: 'th', name : 'Thailand' },
    { id: 'xx', name : 'Default country' } ] ;
  setDefault() {
    this.firstName = 'default name';
    this.country = this.countries[this.countries.length-1];
  }
  showCountry() {
	console.log('country', this.country);
  }
  
  debugNgModel(ngForm1:any, ngModelfirstName:any) {
	debugger;
	console.log('ngForm1', ngForm1);
	console.log('ngModelfirstName', ngModelfirstName);	
	
  }
}
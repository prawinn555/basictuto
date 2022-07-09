import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
   <div id="rootContent"
        class="m-2">
          <img src="assets/angular_logo.png"
               class="m-2" />
          

		<div class="bd-example" >
			<nav class="nav nav-pills nav-fill">


			  <a *ngFor="let item of menus"
			    	[class]="getMenuClass(item)" 
			    	(click)="goMenu(item)">{{item}}</a>
			</nav>
		</div>

			 <div class="m-1" *ngIf="menu==='Home'" >
				<h1>
				   Welcome ! 👋👋👋
				</h1>
				<p>In this small app, you will find a various demos on angular baic features, such as data binding, 
				 managing input forms, calling REST API with RxJS.
				</p>
				
				<p>
				    <a 	href="https://github.com/prawinn555/basictuto/tree/main/nodeJsBasic/angularfeatures"
				        target="_blank"
						class="link-info m-1">👨‍💻️ The code is on Github.</a>
				</p>
				<p>Please feel free to contact me if you have any suggestions or you want to work with me. 
				
				    <a 	href="mailto:prawinn555@gmail.com"
						class="link-info m-1">✉️ Email prawinn555@gmail.com</a>
						
						
				    <a 	href="https://www.linkedin.com/in/prawee-sriplakich-47611613b/"
				        target="_blank"
						class="link-info m-1">🌐 Linkedin</a>
				</p>.
				
			 </div>	
			 
			 <div class="m-1" *ngIf="menu==='Demo 1'" >
			      <app-demo1></app-demo1>
			 </div>	

	      	<div class="m-1" *ngIf="menu==='Demo 2'" >
			      <app-demo2></app-demo2>
			 </div>	
			 
			 
	      	<div class="m-1" *ngIf="menu==='Demo 3'" >
			      <app-demo3 [inputParam]="{data:['a', 'b', 'c']}"  (outEvent)="showAlert($event)" ></app-demo3>
			</div>	
			 

    </div>
    
  `,
  styles: [
  ]
})
export class AppComponent {
	
	menus = [ 'Home', 'Demo 1', 'Demo 2', 'Demo 3'];
	menu= this.menus[0];
	
	
	showAlert(v: object) {
	  debugger;
	  alert('the parent is receiving ' +JSON.stringify(v));
	}
	
	goMenu(menu:string) {
		this.menu  = menu;
	}
	
	getMenuClass(menu:string):string {
		return (this.menu===menu)? 'nav-link active' : 'nav-link';
	}

}
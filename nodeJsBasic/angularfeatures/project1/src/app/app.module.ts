import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1.component';
import { Demo2Component } from './demo2Form.component';
import { Demo3Component } from './demo3RxJS.component';

import { FormsModule } from '@angular/forms';


import {CallApiRestService } from './callApiRest.service';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CallApiRestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

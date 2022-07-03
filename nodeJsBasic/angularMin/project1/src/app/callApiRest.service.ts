import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {MyData} from './myData';

@Injectable()
export class CallApiRestService {
  constructor(private http: HttpClient) { }
  
  apiURL = 'https://catfact.ninja/fact';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  /*
  
  httpOptions: {
	  headers?: HttpHeaders | {[header: string]: string | string[]},
	  observe?: 'body' | 'events' | 'response',
	  params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
	  reportProgress?: boolean,
	  responseType?: 'arraybuffer'|'blob'|'json'|'text',
	  withCredentials?: boolean,
	}

*/

	private handleError(error: HttpErrorResponse) {
	   console.error('CallApiRestService : An error occurred:', error);
	  // Return an observable with a user-facing error message.
	  return throwError(() => new Error('Application says "Something bad happened; please try again later."'));
	}
	  
  getData(provokeErrorForTest: boolean) : Observable<MyData> {
    console.log('CallApiRestService getData');
    return this.http
      .get<MyData>(
        provokeErrorForTest? 'http://localhost:1111/badurl' : this.apiURL ,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }


}
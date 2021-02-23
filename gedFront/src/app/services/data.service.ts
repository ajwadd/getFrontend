import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL_SERVER = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { 
   
  }

  private getURL(path) {
    return `${this.URL_SERVER}${path}`;
  }

  getAll(path: string): Observable<any>{
    return this.http.get(this.getURL(path)).pipe(catchError(this.handleError))
    ;
   }
   
   post(path: string,body: {}): Observable<any> {
    return this.http.post<any>(this.getURL(path), body).pipe(catchError(this.handleError));
  }

  update(path: string, body: {}): Observable<any>{
    return this.http.put<any>(this.getURL(path), body).pipe(catchError(this.handleError))
    ;
   }

/*
   delete(resource): Observable<any>{
    return this.http.delete(this.Url+'/'+resource.id).pipe(catchError(this.handleError))
       ;
   }*/

   
   private handleError(error: Response) {
    if(error.status === 404){
      return throwError(new NotFoundError)
    }
    if(error.status === 400){
      return throwError(new BadInput)
    }
    return throwError(new AppError);
 
   }

}

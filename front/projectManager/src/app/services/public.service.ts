import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  
  protected basePath = environment.api
  
  constructor(private httpClient: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  /**
   * Method for POST new user 
   * @param user obj 'user'
   */ 
  postNewUser<T>(user: object): Observable<any> {
    return this.httpClient.post<T>(this.basePath + '/users/', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 

  /**
   * Method for POST new project 
   * @param project obj 'project'
   */ 
  postNewProject<T>(project: object): Observable<any> {
    return this.httpClient.post<T>(this.basePath + '/projects/', JSON.stringify(project), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 

   /**
   * Method for POST new project 
   * @param work obj 'work' with all datas description about current daily work 
   */ 
  postWork<T>(work: object): Observable<any> {
    return this.httpClient.post<T>(this.basePath + '/work/', JSON.stringify(work), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 

   /**
   * Method for GET all projects 
   * 
   */ 
  getProjects(): Observable<any> {
    return this.httpClient.get<any>(this.basePath + '/projects/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

   // Error handling
   errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

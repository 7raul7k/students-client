import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {StudentDto} from "../models/api/StudentDto";

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private url ="http://localhost:8080/api/v1/all"
  constructor(private http:HttpClient) { }

  getStudents():Observable<StudentDto[]>{
    return  this.http.get<StudentDto[]>(this.url).pipe(catchError(this.handleError))

  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(()=>'Something bad happened; please try again later.');
  };
}

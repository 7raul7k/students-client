import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {StudentDto} from "../models/api/StudentDto";

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private url ="http://localhost:8080"
  constructor(private http:HttpClient) { }

  getStudents():Observable<StudentDto[]>{
    return  this.http.get<StudentDto[]>(this.url+"/api/v1/all").pipe(catchError(this.handleError))

  }

  addStudent(studentDto : StudentDto):Observable<StudentDto>{

    return  this.http.post<StudentDto>(this.url+"/api/v1/add", studentDto).pipe(catchError(this.handleError));
  }

  updateStudent(studentDTO : StudentDto):Observable<StudentDto>{

    return this.http.put<StudentDto>(this.url +"/api/v1/update",studentDTO)
  }

  getStudentById(id : number):Observable<StudentDto>{

    return this.http.get<StudentDto>(this.url +`/api/v1/getStudentById?id=${id}`);
  }

  deleteStudent(email : String):Observable<String>{

    return this.http.delete<String>(this.url + `/api/v1/delete?email=${email}`);
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

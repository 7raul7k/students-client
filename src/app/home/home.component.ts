import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {StudentDto} from "../models/api/StudentDto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  students: StudentDto[] = [];

  ngOnDestroy(): void {
  }

  ngOnInit(): void {


    this.studentService.getStudents().subscribe({

      next: (data) => {

        this.students=data;


      },
      complete: () => {

      },
      error: () => {

      }
    })
  }

  constructor(private studentService: StudentService) {
  }


}

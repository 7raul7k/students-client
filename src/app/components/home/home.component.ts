import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {StudentDto} from "../../models/api/StudentDto";
import {Router} from "@angular/router";
import {LoadingState} from "../../models/LoadingState.enum";
import {Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  loadingState$: Subject<LoadingState> = this.studentService.loadingStateSubject$;
  students: StudentDto[] = [];

  ngOnDestroy(): void {
  }

  ngOnInit(): void {


    this.studentService.getStudents().subscribe({

      next: (data) => {
        this.students=data;
        this.studentService.loadingStateSubject$.next(LoadingState.Success);
      },
      error: () => {
        this.studentService.loadingStateSubject$.next(LoadingState.Error);
      }
    });
  }

  constructor(private studentService: StudentService ,private router: Router){
  }
  navigateToUpdate(student:any) {
    this.router.navigate(['/update', student.id]);
  }


  protected readonly LoadingState = LoadingState;
}

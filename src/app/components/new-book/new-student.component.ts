import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {StudentDto} from "../../models/api/StudentDto";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit, OnDestroy {

  firstNameValue="";
  lastNameValue = "";
  emailValue = "";
  ageValue : number =  Number("");
  adressValue = "";



  ngOnDestroy(): void {
  }

  ngOnInit(): void {

  }

  constructor(private studentService : StudentService) {
  }


  save(){


    let  studentDTO : StudentDto = {
         firstName:this.firstNameValue,
         lastName:this.lastNameValue,
         email:this.emailValue,
         age:this.ageValue,
         adress:this.adressValue
    };


    this.studentService.addStudent(studentDTO).subscribe({

       next:(data)=>{

         alert(data);
       },
       complete:()=>{

       },
      error:(err)=>{
        alert(err);
       }
    });

    console.log(this.firstNameValue);
  }

}

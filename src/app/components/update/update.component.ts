import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentDto} from "../../models/api/StudentDto";
import {StudentService} from "../../service/student.service";
import {Message} from "primeng/api";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit,OnDestroy{


   student:StudentDto={
     firstName : "",
     lastName :"",
     email : "",
     age : 0,
     adress : ""
   }
   id=2;

  messages: Message[] =[];


  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    this.messages = [{ severity: 'success', summary: 'Success', detail:  'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' }
    ];
    this.studentService.getStudentById(this.id).subscribe({

         next:(data)=>{

             this.student=data;



         },
         error:(err)=> {

            console.log(err);
         }
    })


  }

  constructor( private studentService : StudentService) {
  }

  updateStudent(){

    this.studentService.updateStudent(this.student).subscribe({

      next : (data) =>{

        this.messages.push({ severity: 'success', summary: 'Success', detail: 'Student was updated' })

      },
      error : (err) =>{
        console.log(err);
      }
    })
  }

  deleteStudent(){

    this.studentService.deleteStudent(this.student.email).subscribe({
      next : (data) =>{

        this.messages.push({ severity: 'success', summary: 'Success', detail: 'Student was deleted' })
      },
      error : (err) =>{
        console.log(err);
      }
    })
  }




}

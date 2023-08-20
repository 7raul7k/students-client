import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {StudentDto} from "../../models/api/StudentDto";
import {Message} from "primeng/api";

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
  messages: Message[] =[];




  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.messages = [{ severity: 'success', summary: 'Success', detail:  'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' }
    ];

  }

  constructor(private studentService : StudentService) {
  }





  save(){

    this.checkValidation();
        if(this.messages.length==0){

          let  studentDTO : StudentDto = {
            firstName:this.firstNameValue,
            lastName:this.lastNameValue,
            email:this.emailValue,
            age:this.ageValue,
            adress:this.adressValue
          };
          this.studentService.addStudent(studentDTO).subscribe({

            next:(data)=>{
              this.messages.push( { severity: 'success', summary: 'Success', detail: 'Student was added' });
            },
            complete:()=>{

            },
            error:(err)=>{
              alert(err);
            }
          });
        }




  }


  private  checkValidation(){

    this.messages=[];
    if(this.firstNameValue==''){

       this.messages.push( { severity: 'error', summary: 'Error', detail: 'First name missing' });
    }
    if(this.lastNameValue ==""){

      this.messages.push({ severity: 'error', summary: 'Error', detail: 'Last name missing' })
    }
    if(this.emailValue ==""){

      this.messages.push({ severity: 'error', summary: 'Error', detail: 'Email missing' })
    }
    if(this.ageValue == 0 ){

      this.messages.push({ severity: 'error', summary: 'Error', detail: 'Age missing' })
    }
    if(this.adressValue ==""){

      this.messages.push({ severity: 'error', summary: 'Error', detail: 'Address missing' })
    }

  }
}

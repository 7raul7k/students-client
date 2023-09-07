import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewStudentComponent} from "./components/new-book/new-student.component";
import {UpdateComponent} from "./components/update/update.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: NewStudentComponent },
  { path: 'update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

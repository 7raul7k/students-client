import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewStudentComponent } from './components/new-book/new-student.component';
import {FormsModule} from "@angular/forms";
import { MessagesModule } from 'primeng/messages';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UpdateComponent } from './components/update/update.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewStudentComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MessagesModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

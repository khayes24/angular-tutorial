//To create new component via cli -> ng g c componentName
//To create new service via cli -> ng g s servicename

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  //Registers all dependecies
  //This provider will be created as a single instace for all components dependent onit
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

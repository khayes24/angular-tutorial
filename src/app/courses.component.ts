//Import angular
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
//Declarator Function
@Component({
  selector: 'courses', //<courses> "course"  //<div class="courses"> ".course"
  //Using the backtick in the template attribute allows code to be broken up into multiple lines
  template: `
  <h2>{{ getTitle() }}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>
  `
})

export class CoursesComponent {
  title = "List of courses";
  courses;

  //Angular automatically instatiates service by having it in constructor
  constructor(service: CoursesService){
    this.courses = service.getCourses();
  }

  //Getter function
  getTitle(){
    return this.title;
  }
}

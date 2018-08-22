//Import angular
import { Component } from '@angular/core';
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

  courses = ["course1", "course2", "course3"];

  //Getter function
  getTitle(){
  return this.title;
}
}

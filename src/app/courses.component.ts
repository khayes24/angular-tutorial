//Import angular
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
//Declarator Function
@Component({
  selector: 'courses', //<courses> "course"  //<div class="courses"> ".course"
  //Using the backtick in the template attribute allows code to be broken up into multiple lines
  template: `
  {{course.title}}<br>
  {{course.students | number}}<br>
  {{course.rating | number:'1.2-2'}}<br>
  {{course.price | currency:'AUD':true}}<br>
  {{course.releaseDate | date:'shortDate'}}<br>
  `
})

export class CoursesComponent {

  course = {
    title: "Complete Guy",
    rating: 4.956,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2018, 25, 8)
  }

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

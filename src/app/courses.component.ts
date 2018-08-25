//Import angular
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
//Declarator Function
@Component({
  selector: 'courses', //<courses> "course"  //<div class="courses"> ".course"
  //Using the backtick in the template attribute allows code to be broken up into multiple lines
  template: `
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  <div (click)="onDivClicked()">
    <button class="btn btn-primary" (click)="onSave($event)">Save</button>
  </div>
  `
})

export class CoursesComponent {
  email = "me@example.com";

  onKeyUp(){
    //Angular handles key events already. this function is called on enter button being pressed
      console.log(this.email);
  }

  onSave($event){//The $event gives access to event handler object
    //Event bubbling goes up the dom tree. The inner event will show first then the outer div
    //$event.stopPropogation(); will prevent event bubbling
    console.log('YEAHHH', $event);
  }

  onDivClicked(){
    console.log('Div clicked!');
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

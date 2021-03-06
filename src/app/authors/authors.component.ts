import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = "List of authors";
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  //Getter function
  getTitle(){
    return this.title;
  }

  ngOnInit() {
  }

}

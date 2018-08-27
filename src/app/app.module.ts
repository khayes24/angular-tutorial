//To create new component via cli -> ng g c componentName
//To create new service via cli -> ng g s servicename
//To create a custom pipe via cli -> ng g p pipeName

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    CustompipeComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  //Registers all dependecies
  //This provider will be created as a single instace for all components dependent onit
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

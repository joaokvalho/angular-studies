import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent {

  module: string;
  courses: string[]

  // injected in constructor
  constructor(private coursesService: CoursesService){
    this.module = 'Cources List'

    this.courses = coursesService.getCourses()
  }

}

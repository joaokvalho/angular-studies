import { Component, Input } from '@angular/core';
import { Course } from '../models/courses.model';

@Component({
  selector: 'app-course',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent {

  @Input('object') courses: Course[]

}

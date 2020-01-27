import { Component } from '@angular/core';

import { Course } from './models/courses.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count: number = 0;

  courses: Course[] = [new Course('Java'),
  new Course('JavaScript'),
  new Course('TypeScript'),
  new Course('Dart'),
  new Course('Angular'),
  new Course('Fluter')
  ]

  OnCount(event: any) {
    this.count = event.countValue
  }

}

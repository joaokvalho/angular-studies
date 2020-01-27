import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): any{
    return ['Java', 'JavaScript', 'Dart', 'Typescript', 'Angular', 'flutter', 'VueJS']
  }
  
}

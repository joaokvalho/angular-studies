import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  module: string

  courses: string[] = ['Java', 'Angular', 'Flutter', 'vueJS', 'typescript', 'JavaScript', 'Dart']

  constructor(){
    this.module = 'Cource List'
  }

}

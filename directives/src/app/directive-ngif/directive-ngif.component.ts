import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent implements OnInit {

  courses: string[] = ['Java', 'JavaScript', 'Dart', 'Typescript', 'Flutter', 'Angular']

  constructor() { }

  ngOnInit() {
  }

}

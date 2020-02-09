import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.css']
})
export class DirectiveNgforComponent implements OnInit {

  courses: string[] = ['Java', 'JavaScript', 'Dart', 'Typescript', 'Flutter', 'Angular']
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

import { Person } from '../models/person.model';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  name: string
  isEmpty: boolean = false
  msg: string = 'Name is required'
  added: boolean = false

  add() {
    if (!this.name) {
      this.isEmpty = true
      this.msg = 'Name is required'
    } else {
      this.added = true
      this.msg = `Person added `
    }
  }

  onChange(name: any) {
    this.name = name
  }

  onFocus(){
    this.added = false
  }

}

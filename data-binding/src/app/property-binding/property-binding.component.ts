import { Component } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  name: string = ''  
  msg: string = 'Name is required'
  added: boolean = false

  add() {    
      this.added = true
      this.msg = `Person added `    
  }

  change(name: any) {
    this.name = name
  }

  onFocus(){
    this.added = false
  }

}

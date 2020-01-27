import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-data-binding',
  templateUrl: './twoway-data-binding.component.html',
  styleUrls: ['./twoway-data-binding.component.css']
})
export class TwowayDataBindingComponent {

  name: string = ''  
  msg: string = 'Name is required'
  added: boolean = false

  add() {    
      this.added = true
      this.msg = `Person added `    
  }
  
  onFocus(){
    this.added = false
  }

}

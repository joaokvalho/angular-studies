import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  countValue: number = 0
  @Output('countExport') countExport = new EventEmitter()

  inc() {
    this.countValue++
    this.countExport.emit({countValue: this.countValue})
  }

  dec() {
    if (this.countValue > 0) {
      this.countValue--
      this.countExport.emit({countValue: this.countValue})
    }
  }

}

import { Component, OnInit, OnChanges, 
         DoCheck, AfterContentInit, 
         AfterContentChecked, 
         AfterViewChecked, 
         OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cicle',
  templateUrl: './cicle.component.html',
  styleUrls: ['./cicle.component.css']
})
export class CicleComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked,
  OnDestroy {

    initialValue: number = 10

  msgConstructor: boolean = false;
  msgOnChange: boolean = false;
  msgOnInit: boolean = false;
  msgDoCheck: boolean = false;
  msgAfterContentInit: boolean = false;
  msgAfterContentChecked: boolean = false;
  msgAfterViewChecked: boolean = false;
  msgOnDestroy: boolean = false;

  constructor() {
    if (this.msgConstructor) {
      this.msgConstructor = false
    } else {
      this.msgConstructor = true
    }
  }

  ngOnChanges(): void {
    if (this.msgOnChange) {
      this.msgOnChange = false
    } else {
      this.msgOnChange = true
    }
  }

  // quando o componente é atualizado
  ngOnInit(): void {
    if (this.msgOnInit) {
      this.msgOnInit = false
    } else {
      this.msgOnInit = true
    }
  }

  // A cada ciclo de verificação de mudanças
  ngDoCheck(): void {
    if (this.msgDoCheck) {
      this.msgDoCheck = false
    } else {
      this.msgDoCheck = true
    }
  }

  ngAfterContentInit(): void {
    if (this.msgAfterContentInit) {
      this.msgAfterContentInit = false
    } else {
      this.msgAfterContentInit = true
    }
  }

  ngAfterContentChecked(): void {
    if (this.msgAfterContentChecked) {
      this.msgAfterContentChecked = false
    } else {
      this.msgAfterContentChecked = true
    }
  }

  ngAfterViewChecked(): void {
    if (this.msgAfterViewChecked) {
      this.msgAfterViewChecked = false
    } else {
      this.msgAfterViewChecked = true
    }
  }

  ngOnDestroy(): void {
    if (this.msgOnDestroy) {
      this.msgOnDestroy = false
    } else {
      this.msgOnDestroy = true
    }
  }


}

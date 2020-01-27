import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosListComponent } from './cursos-list/cursos-list.component';

@NgModule({
  declarations: [CursosListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosListComponent
  ]
})
export class CoursesModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgforComponent,
    DirectiveNgswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

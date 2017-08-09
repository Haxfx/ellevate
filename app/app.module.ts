import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BirkmanComponent } from '../app/components/birkman/birkman.component';

@NgModule({
  declarations: [
    AppComponent,
    BirkmanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

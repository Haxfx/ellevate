import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BirkmanComponent } from '../app/components/birkman/birkman.component';
import { CoachingComponent } from './components/coaching/coaching.component';
import { ContactComponent } from './components/contact/contact.component';
import { EllevateComponent } from './components/ellevate/ellevate.component';
import { ReferentiesComponent } from './components/referenties/referenties.component';
import { OvermijComponent } from './components/overmij/overmij.component';

@NgModule({
  declarations: [
    AppComponent,
    BirkmanComponent,
    CoachingComponent,
    ContactComponent,
    EllevateComponent,
    ReferentiesComponent,
    OvermijComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

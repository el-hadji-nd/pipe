import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrShortPipe } from './shared/pipes/str-short.pipe';
import { ExemplePipe } from './exemple.pipe';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './shared/pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StrShortPipe,
    ExemplePipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

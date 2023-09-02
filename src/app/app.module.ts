import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitModule } from './modules/init/init.module';
import { FloatingContentModule } from './modules/floating-content/floating-content.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

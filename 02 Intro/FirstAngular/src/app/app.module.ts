import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { OtherDemoComponent } from './other-demo/other-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    OtherDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

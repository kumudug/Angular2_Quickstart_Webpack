import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ], //Since the QuickStart application is a web application that runs in a browser, your root module needs to import the BrowserModule from @angular/platform-browser to the imports array.
  declarations: [ AppComponent ], //Specifies a list of directives/pipes that belong to this module.
  bootstrap:    [ AppComponent ] //Defines the components that should be bootstrapped when this module is bootstrapped. The components listed here will automatically be added to entryComponents.
})
export class AppModule { }

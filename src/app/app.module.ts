import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ScrollingModule, MatTabsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
